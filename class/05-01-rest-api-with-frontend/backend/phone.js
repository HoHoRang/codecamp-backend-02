export function checkValidationPhone(myPhone) {
  if (myPhone.length !== 10 && myPhone.length !== 11) {
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}

export function getToken() {
  const myCount = 6;

  if (myCount === undefined) {
    console.log("에러 발생!!! 갯수를 제대로 입력해 주세요!!!");
    return;
  } else if (myCount <= 0) {
    console.log("에러 발생!!! 갯수가 너무 적습니다!!!");
    return;
  } else if (myCount > 10) {
    console.log("에러 발생!!! 갯수가 너무 많습니다!!!");
    return;
  }

  const result = String(Math.floor(Math.random() * 10 ** myCount)).padStart(
    myCount,
    "0"
  );
  // console.log(result);
  return result;
}

export function sendTokenToSMS(myPhone, myToken) {
  console.log(myPhone + " 번호로 인증번호 " + myToken + "를 전송합니다.");
}
