console.log("안녕하세요");

function createTokenOfPhone(myPhone) {
  // 1. 핸드폰 번호 제대로 입력?

  if (myPhone.length !== 10 && myPhone.length !== 11) {
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!");
    return;
  }

  // 2. 토큰 6자리 생성
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
  console.log(result);

  // 3. 핸드폰에 토큰 보내주기
  console.log(myPhone + " 번호로 인증번호 " + result + "를 전송합니다.");
}

createTokenOfPhone("0103386");
