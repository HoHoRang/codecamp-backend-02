import { getToday } from "./utils.js";

// 1. 이메일이 정상인지 확인(1-존재여부, 2-'@'포함여부)
export function checkValidationEmail(mail) {
  if (mail === undefined || !mail.includes("@")) {
    console.log("이메일 형식이 올바르지 않습니다!");
    return false;
  } else {
    return true;
  }
}

// 2. 가입환영 템플릿 만들기
export function getWelcomeTeplate(name, age, school) {
  return `
      <html>
        <body>
          <h1>${name}님 가입을 환영합니다.</h1>
          <hr>
          <div>이름: ${name}</div>
          <div>나이: ${age}살</div>
          <div>학교: ${school}</div>
          <div>가입일: ${getToday()}</div>
        </body>
      </html>
    `;
}

// 3. 이메일에 가입환영 템플릿 전송하기
export function sendTemplateToEmail(email, mailContent) {
  console.log(`${email}로 ${mailContent}를 전송합니다.`);
}
