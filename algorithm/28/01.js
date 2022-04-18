function solution(dartResult) {
  let sum = 0; // 총합
  let tempNum = ""; // 현재 수
  let num = 0; // 현재 수 계산
  let prevNum = 0; // 이전 수 계산
  let sumFlag = false; // 합해야 할 때
  let doubleFlag = false; // 2배 점수 계산해야 할 때

  for (let i = 0; i < dartResult.length; i++) {
    // 숫자인 경우 임시
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (sumFlag) {
        if (doubleFlag) {
          sum = sum + num + prevNum;
        } else {
          sum = sum + num;
        }
        sumFlag = false;
        doubleFlag = false;
      }
      tempNum += dartResult[i];
    } else if (dartResult[i] === "S") {
      prevNum = num;
      num = Number(tempNum);
      tempNum = "";
      sumFlag = true;
    } else if (dartResult[i] === "D") {
      prevNum = num;
      num = Number(tempNum) ** 2;
      tempNum = "";
      sumFlag = true;
    } else if (dartResult[i] === "T") {
      prevNum = num;
      num = Number(tempNum) ** 3;
      tempNum = "";
      sumFlag = true;
    } else if (dartResult[i] === "*") {
      num *= 2; // 해당 점수 2배
      sum -= prevNum; // 이전 점수 빼고
      prevNum *= 2; // 이전 점수 2배
      doubleFlag = true;
    } else if (dartResult[i] === "#") {
      num = -num;
    }
  }

  // 문자열 끝난 경우 마지막으로 더해줌
  if (doubleFlag) {
    sum = sum + num + prevNum;
  } else {
    sum = sum + num;
  }

  return sum;
}
