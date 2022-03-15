console.log("안녕하세요");

function checkValidationPhone(myPhone) {
  if (myPhone.length !== 10 && myPhone.length !== 11) {
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}

function getToken() {
  const mycount = 6;

  if (mycount === undefined) {
    console.log("에러 발생!!! 갯수를 제대로 입력해 주세요!!!");
    return;
  } else if (mycount <= 0) {
    console.log("에러 발생!!! 갯수가 너무 적습니다!!!");
    return;
  } else if (mycount > 10) {
    console.log("에러 발생!!! 갯수가 너무 많습니다!!!");
    return;
  }

  const result = String(Math.floor(Math.random() * 10 ** mycount)).padStart(
    mycount,
    "0"
  );
  // console.log(result);
  return result;
}

function sendTokenToSMS(myPhone, myToken) {
  console.log(myPhone + " 번호로 인증번호 " + myToken + "를 전송합니다.");
}

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
