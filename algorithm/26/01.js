/*
자연수 n이 매개변수로 주어집니다. 
n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
n은 1 이상 100,000,000 이하인 자연수입니다.
*/
function solution(n) {
  let temp = "";
  let result = 0;

  temp = n.toString(3); // 10진수 -> 3진수

  temp = temp.split("").reverse().join(""); // 뒤집기

  result = parseInt(temp, 3); // 3진수 -> 10진수

  return result;
}

// function solution(n) {
//   let temp = "";
//   let idx = 0;

//   let result = 0;

//   for (let i = 0; n >= 3 ** i; i++) {
//     idx = i;
//   }

//   for (let i = idx; i >= 0; i--) {
//     temp = temp + Math.floor(n / 3 ** i);
//     n = n % 3 ** i;
//   }

//   for (let i = 0; i < temp.length; i++) {
//     result += temp[i] * 3 ** i;
//   }

//   return result;
// }
