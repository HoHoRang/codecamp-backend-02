import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import mongoose from "mongoose";
import { Starbucks } from "./models/starbucks.model.js";
import { Token } from "./models/token.model.js";
import { UserController } from "./controllers/user.controller.js";

import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json()); //JSON.parse()와 같음
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.use(cors());

const userController = new UserController();

app.post("/user", userController.enrollUser);

app.get("/users", userController.getUser);

app.post("/tokens/phone", async (req, res) => {
  const { phone } = req.body;

  // 1. 핸드폰 번호가 제대로 입력되었는지 확인
  const isValid = checkValidationPhone(phone);

  if (isValid) {
    // 2. 토큰 6자리 생성
    const token = getToken();

    // 3. 입력된 핸드폰 번호로 데이터가 존재하는지 확인
    const existData = await Token.findOne({ phone });

    // 4. DB에 저장 혹은 업데이트
    if (existData === null) {
      // 5. 기존에 없는 경우, DB에 저장
      await new Token({ token, phone, isAuth: false }).save();
      console.log("기존에 없는 번호 DB에 저장 완료");
    } else {
      // 6. 기존에 저장된 경우, DB에 업데이트
      await Token.updateOne({ phone }, { token, isAuth: false });
      console.log("기존에 있는 번호 DB에 토큰 업데이트 완료");
    }

    // 7. 핸드폰에 토큰 보내주기
    sendTokenToSMS(phone, token);
    res.send("토큰SMS 전송완료!");
  }
});

app.patch("/tokens/phone", async (req, res) => {
  const { phone, token } = req.body;

  // 1. 핸드폰 번호가 제대로 입력되었는지 확인
  const isValid = checkValidationPhone(phone);

  if (isValid) {
    // 2. 입력된 핸드폰 번호로 데이터가 존재하는지 확인
    const existData = await Token.findOne({ phone });

    if (existData === null) {
      // 3. 기존에 없는 경우, false 응답
      console.log("기존에 없는 번호로 false 응답 완료");
      res.send(false);
    } else {
      // 4. 기존에 있는 경우, 토큰이 일치하는지 검증
      if (existData.token !== token) {
        // 5. 토큰이 일치하지 않으면, false 응답
        console.log("토큰이 일치하지 않아 false 응답 완료");
        res.send(false);
      } else {
        // 6. 토큰이 일치한다면, isAuth true로 변경하고 true 응답
        await Token.updateOne({ phone, token }, { isAuth: true });
        console.log("토큰이 일치하여 isAuth 업데이트 및 true로 응답 완료");
        res.send(true);
      }
    }
  }
});

app.get("/starbucks", async (req, res) => {
  // 1. DB에 저장된 Starbucks 목록 조회
  const result = await Starbucks.find();

  console.log("Starbucks 정보 반환 완료");

  // 2. 꺼내온 결과 응답 주기
  res.send(result);
});

//mongoDB 접속
mongoose.connect("mongodb://my-database:27017/codecamp");

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
