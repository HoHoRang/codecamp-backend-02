/*
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

제한 사항
n은 1이상, 50000000000000 이하인 양의 정수입니다.
*/
function solution(n) {
  let sqrt = Math.sqrt(n);

  if (sqrt === Math.floor(sqrt)) {
    return Math.pow(sqrt + 1, 2);
  } else {
    return -1;
  }
}

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}

// function solution(n) {
//   let sqrt = Math.sqrt(n);

//   if (Number.isInteger(sqrt)) {
//     return Math.pow(sqrt + 1, 2);
//   } else {
//     return -1;
//   }
// }

// function solution(n) {
//   let answer = -1;

//   for (let i = 1; i ** 2 <= n; i++) {
//     if (i ** 2 === n) {
//       answer = i + 1;
//       return answer ** 2;
//     }
//   }
//   return answer;
// }

// function solution(n) {
//   let answer = 1;

//   while (answer ** 2 < n) {
//     answer++;
//   }

//   return answer ** 2 === n ? (answer + 1) ** 2 : -1;
// }
