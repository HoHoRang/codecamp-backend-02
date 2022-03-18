import { ApolloServer, gql } from "apollo-server";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";

// The GraphQL schema
const myTypeDefs = gql`
  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }
  type Query {
    #fetchBoards: Board => 객체 1개를 의미
    fetchBoards: [Board] # => 배열 안에 객체 1개 이상을 의미
  }
  type Mutation {
    createBoard(writer: String, title: String, contents: String): String
    createBoard2(createBoardInput: CreateBoardInput): String
    createTokenOfPhone(myPhone: String): String
  }
`;

// A map of functions which return data for the schema.
const myResolvers = {
  Query: {
    fetchBoards: () => {
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
      return result;
    },
  },
  Mutation: {
    createBoard: (_, args) => {
      // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
      console.log(args);

      // 2. 저장 결과 알려주기
      return "등록에 성공하였습니다!";
    },
    createBoard2: (_, args) => {
      // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
      console.log(args);

      // 2. 저장 결과 알려주기
      return "등록에 성공하였습니다!";
    },
    createTokenOfPhone: (_, args) => {
      // 1. 핸드폰 번호 제대로 입력?
      const isValid = checkValidationPhone(args.myPhone);

      if (isValid) {
        // 2. 토큰 6자리 생성
        const myToken = getToken();
        // 3. 핸드폰에 토큰 보내주기
        sendTokenToSMS(args.myPhone, myToken);
        return "인증완료!";
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs: myTypeDefs,
  resolvers: myResolvers,
});

server.listen(3001).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
