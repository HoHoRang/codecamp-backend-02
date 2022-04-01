/*
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 
단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건
s는 길이 1 이상 200 이하인 문자열입니다.
s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
숫자는 단어의 첫 문자로만 나옵니다.
숫자로만 이루어진 단어는 없습니다.
공백문자가 연속해서 나올 수 있습니다.
*/
function solution(s) {
  //단어의 첫번째 문자는 숫자 혹은 문자
  const wordArr = s.split(" ");
  //숫자인 경우 그대로
  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i]) {
      if (isNaN(wordArr[i][0])) {
        //문자인 경우 대문자 처리
        wordArr[i] =
          wordArr[i][0].toUpperCase() + wordArr[i].substring(1).toLowerCase();
      } else {
        wordArr[i] = wordArr[i][0] + wordArr[i].substring(1).toLowerCase();
      }
    }
  }
  return wordArr.join(" ");
}

// function solution(s) {
//   return s
//     .split(" ")
//     .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
//     .join(" ");
// }

console.log(solution("for   the   last   week"));
