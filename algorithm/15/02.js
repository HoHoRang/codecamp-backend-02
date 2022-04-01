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
      wordArr[i] =
        wordArr[i][0].toUpperCase() + wordArr[i].substring(1).toLowerCase();
    }
  }
  return wordArr.join(" ");
}

// substring()은 문자열에만 사용 가능한 함수(slice와 동일한 기능)
// slice()는 문자열, 배열에 사용 가능한 함수(substring과 동일한 기능)
// substr()은 문자열에서만 사용 가능한 함수(2번째 인자는 문자 몇 개를 자를건지 넣어야 함)
// substr()은 되도록 사용하지 않도록 권장됨

// function solution(s) {
//   s = s
//     .toLowerCase()
//     .split(" ")
//     .map((word) => {
//       return word !== "" ? word[0].toUpperCase() + word.substring(1) : word;
//     });

//   return s.join(" ");
// }

// function solution(s) {
//   s = s.toLowerCase();

//   let idx = 0;
//   let answer = "";
//   for (let i = 0; i < s.length; i++) {
//     let letter = s[i];

//     if (letter === " ") {
//       idx = 0;
//     } else {
//       if (idx === 0) {
//         letter = s[i].toUpperCase();
//       }
//       idx++;
//     }
//     answer += letter;
//   }
//   return answer;
// }

// function solution(s) {
//   return s
//     .split(" ")
//     .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
//     .join(" ");
// }
