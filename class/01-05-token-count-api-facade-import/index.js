import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";

console.log("안녕하세요");

function createTokenOfPhone(myPhone) {
  // 1. 핸드폰 번호 제대로 입력?
  const isValid = checkValidationPhone(myPhone);

  if (isValid) {
    // 2. 토큰 6자리 생성
    const myToken = getToken();
    // 3. 핸드폰에 토큰 보내주기
    sendTokenToSMS(myPhone, myToken);
  }
}

createTokenOfPhone("01033869380");
