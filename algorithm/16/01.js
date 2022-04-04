/*
2016년 1월 1일은 금요일입니다. 
2016년 a월 b일은 무슨 요일일까요? 
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다. 
예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
*/
function solution(a, b) {
  const date = new Date(2016, a - 1, b);
  const day = date.getDay();
  const dayStr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return dayStr[day];
}

// 기준일로부터 해당일까지의 총 일수를 구하여 더한 다음, 7로 나눈 나머지만큼 요일을 더하면 구할 수 있음
// const month = {
//   1: 31,
//   2: 29,
//   3: 31,
//   4: 30,
//   5: 31,
//   6: 30,
//   7: 31,
//   8: 31,
//   9: 30,
//   10: 31,
//   11: 30,
//   12: 31,
// };

// const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

// function solution(a, b) {
//   // a월 b일까지 해당되는 모든 일수를 저장
//   let answer = 0;

//   for (let i = 1; i < a; i++) {
//     // a월 전까지의 모든 월의 일수를 더한다.
//     answer += month[i];
//   }
//   answer += b - 1;

//   return week[answer % 7];
// }

// function solution(a, b) {
//   const answer = new Array(a).fill(1).reduce((acc, cur, idx) => {
//     const mn = cur + idx;
//     return acc + (mn !== a ? month[mn] : b - 1);
//   }, 0);

//   return week[answer % 7];
// }
