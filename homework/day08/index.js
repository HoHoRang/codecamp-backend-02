import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import express from "express";
import mongoose from "mongoose";
import { Token } from "./models/token.model.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json()); //JSON.parse()와 같음

app.post("/tokens/phone", async (req, res) => {
  const myPhone = req.body.phone;

  // 1. 핸드폰 번호가 제대로 입력되었는지 확인
  const isValid = checkValidationPhone(myPhone);

  if (isValid) {
    // 2. 토큰 6자리 생성
    const myToken = getToken();

    // 3. 입력된 핸드폰 번호로 데이터가 존재하는지 확인
    const existData = await Token.findOne({ phone: myPhone });

    // 4. DB에 저장 혹은 업데이트
    if (existData === null) {
      // 5. 기존에 없는 경우, DB에 저장
      await new Token({ token: myToken, phone: myPhone, isAuth: false }).save();
      console.log("기존에 없는 번호 DB에 저장 완료");
    } else {
      // 6. 기존에 저장된 경우, DB에 업데이트
      await Token.updateOne({ phone: myPhone }, { token: myToken });
      console.log("기존에 있는 번호 DB에 토큰 업데이트 완료");
    }

    // 7. 핸드폰에 토큰 보내주기
    sendTokenToSMS(myPhone, myToken);
    res.send("인증완료");
  }
});

app.patch("/tokens/phone", async (req, res) => {
  const myPhone = req.body.phone;
  const myToken = req.body.token;

  // 1. 핸드폰 번호가 제대로 입력되었는지 확인
  const isValid = checkValidationPhone(myPhone);

  if (isValid) {
    // 2. 입력된 핸드폰 번호로 데이터가 존재하는지 확인
    const existData = await Token.findOne({ phone: myPhone });

    if (existData === null) {
      // 3. 기존에 없는 경우, false 응답
      console.log("기존에 없는 번호로 false 응답 완료");
      res.send(false);
    } else {
      // 4. 기존에 있는 경우, 토큰이 일치하는지 검증
      if (existData.token !== myToken) {
        // 5. 토큰이 일치하지 않으면, false 응답
        console.log("토큰이 일치하지 않아 false 응답 완료");
        res.send(false);
      } else {
        // 6. 토큰이 일치한다면, isAuth true로 변경하고 true 응답
        await Token.updateOne(
          { phone: myPhone, token: myToken },
          { isAuth: true }
        );
        console.log("토큰이 일치하여 isAuth 업데이트 및 true로 응답 완료");
        res.send(true);
      }
    }
  }
});

//mongoDB 접속
mongoose.connect("mongodb://my-database:27017/codecamp");
// my-database를 네임 리졸루션이라고 함. 존재하지 않는 DB도 생성됨.

app.listen(3001, () => {
  console.log(`Example app listening on port ${3001}`);
});
