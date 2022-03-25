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
import mongoose from "mongoose";
import { Board } from "./models/board.model.js";
import { Stock } from "./models/stock.model.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json()); //JSON.parse()와 같음
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.get("/boards", async (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = await Board.find(); //Board.find({ writer: "철수" });

  // 2. 꺼내온 결과 응답 주기
  res.send(result);
});

app.post("/boards", async (req, res) => {
  // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  // 프론트엔드로부터 데이터 받아오기
  // 콘솔로 찍어서 확인해보기
  //console.log(req.body);

  const board = new Board({
    // writer: req.body.writer,
    // title: req.body.title,
    // contents: req.body.contents,
    ...req.body,
  });

  await board.save();

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

import {
  checkValidationEmail,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "./email.js";

app.post("/users", (req, res) => {
  const myUser = req.body.user;

  // 1. 이메일이 정상인지 확인(1-존재여부, 2-'@'포함여부)
  if (checkValidationEmail(myUser.email)) {
    // 2. 가입환영 템플릿 만들기
    const mailContent = getWelcomeTemplate(
      myUser.name,
      myUser.age,
      myUser.school
    );
    // 3. 이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(myUser.email, mailContent);
    res.send("가입완료!");
  }
});

app.get("/stocks", async (req, res) => {
  const stocks = await Stock.find();

  res.send(stocks);
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

//mongoDB 접속
mongoose.connect("mongodb://my-database:27017/codecamp");
// my-database를 네임 리졸루션이라고 함. 존재하지 않는 DB도 생성됨.

app.listen(3001, () => {
  console.log(`Example app listening on port ${3001}`);
});
