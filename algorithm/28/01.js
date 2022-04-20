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

// function solution(dartResult) {
//   const isBonus = ["S", "D", "T"];

//   const answer = [];

//   let score = ""; // 점수만 뽑아서 저장하는 변수
//   for (let i = 0; i < dartResult.length; i++) {
//     if (isNaN(dartResult[i]) === false) {
//       // 숫자 타입으로 변환된 데이터의 결과가 NaN 값이 아닌 경우(= 숫자가 맞는 경우)
//       score += dartResult[i];
//     } else {
//       // 숫자 타입으로 변환된 데이터의 결과가 NaN 값이 맞는 경우(= 숫자가 아닌 경우)
//       if (isBonus.includes(dartResult[i])) {
//         // 보너스 처리("S","D","T")
//         score = Number(score);

//         if (dartResult[i] === "D") {
//           score = score ** 2;
//         } else if (dartResult[i] === "T") {
//           score = score ** 3;
//         }

//         answer.push(score);
//         score = "";
//       } else {
//         // 옵션 처리("*", "#")
//         if (dartResult[i] === "#") {
//           // 아차상일 경우: 해당 점수를 마이너스 한다.
//           answer[answer.length - 1] *= -1;
//         } else {
//           // 스타상일 경우: 해당 점수에 2를 곱한다.
//           answer[answer.length - 1] *= 2;

//           // 현재 게임이 2번째 게임 이상일 경우에만
//           if (answer.length > 1) {
//             // 앞에 있는 점수까지 2배로 만들어준다.
//             answer[answer.length - 2] *= 2;
//           }
//         }
//       }
//     }
//   }
//   return answer.reduce((acc, cur) => acc + cur);
// }

// function solution(dartResult) {
//   const isBonus = ["S", "D", "T"];

//   let score = ""; // 문자열에 있는 점수 데이터를 저장
//   let currentScore = 0; // 현재 게임(턴)의 점수를 저장
//   let last = false; // 점수를 최종 저장할 시점을 찾음

//   const answer = dartResult
//     .split("")
//     .reduce((acc, cur) => {
//       if (isNaN(cur) === false) {
//         //점수를 먼저 뽑는다.
//         score += cur;
//         last = false;
//       } else if (isBonus.includes(cur)) {
//         // 보너스 처리
//         score = Number(score);
//         const squared = isBonus.indexOf(cur) + 1;

//         currentScore = score ** squared;
//         score = ""; // 점수를 저장하는 변수를 초기화

//         if (isNaN(dartResult[i + 1]) === false || i + 1 === dartResult.length) {
//           last = true;
//         }
//       } else {
//         if (cur === "*") {
//           currentScore *= 2;

//           if (acc.length > 0) {
//             acc[acc.length - 1] *= 2;
//           }
//         } else {
//           currentScore *= -1;
//         }
//       }

//       if (last) {
//         acc.push(currentScore);
//       }

//       return acc;
//     }, [])
//     .reduce((acc, cur) => acc + cur);

//   return answer;
// }
