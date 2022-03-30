/*
0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ numbers의 길이 ≤ 9
0 ≤ numbers의 모든 원소 ≤ 9
numbers의 모든 원소는 서로 다릅니다.
*/
function solution(numbers) {
  const set1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const result = set1
    .filter((el) => !numbers.includes(el))
    .reduce((acc, cur) => acc + cur, 0);

  return result;
}

// function solution(numbers) {
//   let answer = 0;

//   for (let i = 0; i <= 9; i++) {
//     if (numbers.includes(i) === false) {
//       answer += i;
//     }
//   }
//   return answer;
// }

// function solution(numbers) {
//   const answer = new Array(9).fill(1).reduce((acc, cur, i) => {
//     const num = cur + i;
//     return acc + (numbers.includes(num) ? 0 : num);
//   }, 0);
//   return answer;
// }
