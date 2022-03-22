/*
문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

제한 사항
n은 0 이상 3000이하인 정수입니다.
*/
function solution(n) {
  var answer = 0;

  for (let i = n; i > 0; i--) {
    if (n % i === 0) {
      answer += i;
    }
  }

  return answer;
}
// 혹은 제곱근까지 돌면서, 약수와 숫자/약수를 더해주는 방법도 있음

function solution(n) {
  var answer = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      answer += i;
      answer += n / i;
    }
    if (n === i * i) {
      //제곱근일 경우 중복으로 더해지므로 하나는 뺀다
      answer -= i;
    }
  }

  return answer;
}
