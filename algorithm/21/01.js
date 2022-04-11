/*
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. 
"z"는 1만큼 밀면 "a"가 됩니다. 
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한 조건
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.
*/
function solution(s, n) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    const ascii = s[i].charCodeAt();

    let resAscii;

    if (ascii === 32) {
      resAscii = 32;
    } else if (ascii >= 65 && ascii <= 90) {
      resAscii = ((ascii + n - 65) % 26) + 65;
    } else if (ascii >= 97 && ascii <= 122) {
      resAscii = ((ascii + n - 97) % 26) + 97;
    }

    result.push(String.fromCharCode(resAscii));
  }

  return result.join("");
}

// function solution(s, n) {
//   let answer = "";

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === " ") {
//       answer += " ";
//     } else {
//       let idx = s[i].charCodeAt + n;
//       if (idx > 122 || (idx > 90 && idx - n < 97)) {
//         idx -= 26;
//       }
//       answer += String.fromCharCode(idx);
//     }
//   }
//   return answer;
// }

// function solution(s, n) {
//   const answer = s.split("").reduce((acc, cur) => {
//     const word = lower.includes(cur) ? lower : upper;
//     let idx = word.indexOf(cur) + n;

//     if (idx >= 26) {
//       idx -= 26;
//     }

//     return acc + (cur === " " ? " " : word[idx]);
//   }, "");
//   return answer;
// }

// function solution(s, n) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   let answer = "";

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === " ") {
//       answer += s[i];
//     } else {
//       let idx = alphabet.indexOf(s[i]);
//       const word =
//         idx > 25 ? alphabet.substring(26) : alphabet.substring(0, 26);
//       idx = word.indexOf(s[i]) + n;

//       if (word[idx] === undefined) {
//         idx -= 26;
//       }
//       answer += word[idx];
//     }
//   }
//   return answer;
// }

// function solution(s, n) {
//   const lower = "abcdefghijklmnopqrstuvwxyz";
//   const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   let answer = "";

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === " ") {
//       answer += s[i];
//     } else {
//       const word = lower.includes(s[i]) ? lower : upper;

//       let idx = word.indexOf(s[i]) + n;

//       if (word[idx] === undefined) {
//         idx -= 26;
//       }

//       answer += word[idx];
//     }
//   }
//   return answer;
// }
