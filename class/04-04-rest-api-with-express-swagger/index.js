// const {
//   checkValidationPhone,
//   getToken,
//   sendTokenToSMS,
// } = require("./phone.js");

// const express = require("express");
// commonjs 방식으로는 안되는 이유가???
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const app = express();

app.use(express.json()); //JSON.parse()와 같음
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.get("/boards", (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    {
      number: 1,
      writer: "철수",
      title: "제목입니다.",
      contents: "내용입니다.",
    },
    {
      number: 2,
      writer: "영희",
      title: "제목입니다2",
      contents: "내용입니다2",
    },
    {
      number: 3,
      writer: "훈이",
      title: "제목입니다3",
      contents: "내용입니다3",
    },
  ];

  // 2. 꺼내온 결과 응답 주기
  res.send(result);
});

app.post("/boards", (req, res) => {
  // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  // 프론트엔드로부터 데이터 받아오기
  // 콘솔로 찍어서 확인해보기
  console.log(req.body);

  // 2. 저장 결과 알려주기
  res.send("등록에 성공하였습니다!");
});

/**
 * @swagger
 * /tokens/phone:
 *   post:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.post("/tokens/phone", (req, res) => {
  const myPhone = req.body.myPhone;

  // 1. 핸드폰 번호 제대로 입력?
  const isValid = checkValidationPhone(myPhone);

  if (isValid) {
    // 2. 토큰 6자리 생성
    const myToken = getToken();
    // 3. 핸드폰에 토큰 보내주기
    sendTokenToSMS(myPhone, myToken);
    res.send("인증완료");
  }
});

// app.get("/boards/:id", (req, res) => {
//   console.log(req);
//   res.send("Hello World!");
// });

// app.put("/boards/:id", (req, res) => {
//   console.log(req);
//   res.send("Hello World!");
// });

// app.delete("/boards/:id", (req, res) => {
//   console.log(req);
//   res.send("Hello World!");
// });

app.listen(3001, () => {
  console.log(`Example app listening on port ${3001}`);
});
