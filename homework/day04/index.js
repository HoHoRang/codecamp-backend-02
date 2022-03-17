import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const app = express();

app.use(express.json()); //JSON.parse()와 같음
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.get("/users", (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    {
      email: "aaa@gmail.com",
      name: "철수",
      phone: "01012345678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "bbb@gmail.com",
      name: "짱구",
      phone: "01087654321",
      personal: "220315-1111111",
      prefer: "https://google.com",
    },
    {
      email: "ccc@gmail.com",
      name: "유리",
      phone: "01033333333",
      personal: "220505-3333333",
      prefer: "https://daum.net",
    },
    {
      email: "ddd@gmail.com",
      name: "훈이",
      phone: "01044444444",
      personal: "220605-4444444",
      prefer: "https://youtube.com",
    },
    {
      email: "eee@gmail.com",
      name: "맹구",
      phone: "01055555555",
      personal: "220824-5555555",
      prefer: "https://facebook.com",
    },
  ];

  // 2. 꺼내온 결과 응답 주기
  res.send(result);
});

app.get("/starbucks", (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    {
      name: "아메리카노",
      kcal: 5,
    },
    {
      name: "카페라떼",
      kcal: 15,
    },
    {
      name: "카라멜마끼야또",
      kcal: 25,
    },
    {
      name: "바닐라라떼",
      kcal: 15,
    },
    {
      name: "녹차라떼",
      kcal: 10,
    },
    {
      name: "핫초코",
      kcal: 20,
    },
    {
      name: "아이스티",
      kcal: 15,
    },
    {
      name: "카모마일티",
      kcal: 5,
    },
    {
      name: "페퍼민트티",
      kcal: 5,
    },
    {
      name: "허니자몽티",
      kcal: 10,
    },
  ];

  // 2. 꺼내온 결과 응답 주기
  res.send(result);
});

app.listen(3001, () => {
  console.log(`Example app listening on port ${3001}`);
});
