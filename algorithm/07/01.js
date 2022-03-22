/*
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

재한사항
s는 길이가 1 이상, 100이하인 스트링입니다.
*/
function solution(s) {
  var answer = "";

  const len = s.length;

  if (len % 2 === 0) {
    // 길이가 짝수이면, 가운데 두글자 반환
    answer = s.substr(len / 2 - 1, 2);
  } else {
    // 길이가 홀수이면, 가운데 한글자 반환
    answer = s.substr(Math.floor(len / 2), 1);
  }

  // 혹은 삼항연산자로 구현
  answer = s.substr(Math.ceil(len / 2) - 1, len % 2 === 0 ? 2 : 1);

  return answer;
}
