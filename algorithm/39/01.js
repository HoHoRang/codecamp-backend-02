/*
다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.

(), [], {} 는 모두 올바른 괄호 문자열입니다.
만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다. 예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.
만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다. 예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.
대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다. 이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.

제한사항
s의 길이는 1 이상 1,000 이하입니다.

*/
function solution(s) {
  let count = 0;

  // 문자열이 올바른 괄호 문자열인지 체크하는 로직
  function checkBracket(s) {
    while (s.length !== 0) {
      prevLength = s.length;
      s = s.replace("()", "").replace("{}", "").replace("[]", "");

      if (prevLength === s.length) {
        break;
      }
    }

    if (s.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  // s.length만큼 for문 돌면서 로직 돌려보기
  for (let i = 0; i < s.length; i++) {
    s = s.slice(1) + s[0];

    if (checkBracket(s)) {
      count++;
    }
  }

  // console.log(count);
  return count;
}

// function solution(s) {
//   const numbering = {
//     "[": 0,
//     "]": 1,
//     "{": 2,
//     "}": 3,
//     "(": 4,
//     ")": 5,
//   };
//   let answer = 0;

//   for (let i = 0; i < s.length; i++) {
//     s = s.substring(1) + s[0];
//     const stack = [];

//     for (let l = 0; l < s.length; l++) {
//       if (numbering[s[l]] % 2 === 0) {
//         // 열린 괄호인 경우
//         stack.push(numbering[s[l]]);
//       } else {
//         // 닫힌 괄호인 경우 열린 괄호가 있어야 한다.
//         if (stack.includes(numbering[s[l]] - 1)) {
//           const last = stack[stack.length - 1];
//           if (last === numbering[s[l]] - 1) {
//             // 닫힌 괄호일 때, 배열의 끝이 열린 괄호인지 판단한다.
//             stack.pop();
//           }
//         } else {
//           // 닫힌 괄호는 있지만, 열린 괄호가 없는 경우
//           break;
//         }
//       }

//       // 마지막 괄호를 체크하면서 스택이 비어있는 경우 올바른 문자열
//       if (l === s.length - 1) {
//         if (stack.length === 0) {
//           answer++;
//         }
//       }
//     }
//   }
//   return answer;
// }

// function solution(s) {
//   const numbering = {
//     "[": 0,
//     "]": 1,
//     "{": 2,
//     "}": 3,
//     "(": 4,
//     ")": 5,
//   };

//   return s.split("").reduce((acc, cur, i) => {
//     const str = s.substring(i + 1) + s.substring(0, i + 1);
//     let fail = false;

//     const stack = str.split("").reduce((acc2, cur2) => {
//       if (fail === false) {
//         if (numbering[cur2] % 2 === 0) {
//           // 열린 괄호인지
//           acc2.push(numbering[cur2]);
//         } else {
//           // 닫힌 괄호인지
//           if (acc2[acc2.length - 1] === numbering[cur2] - 1) {
//             acc2.pop();
//           } else if (acc2.includes(numbering[cur2] - 1) === false) {
//             fail = true;
//           }
//         }
//       }
//       return acc2;
//     }, []);
//     return (acc += stack.length === 0 && fail === false ? 1 : 0);
//   }, 0);
// }

// 실패한 케이스
// function solution(s) {
//   let answer = 0;

//   for (let i = 0; i < s.length; i++) {
//     s = s.substring(1) + s[0];

//     const list = { large: 0, middle: 0, small: 0 };
//     for (let l = 0; l < s.length; l++) {
//       if (s[l] === "]") list.large--;
//       if (s[l] === "}") list.middle--;
//       if (s[l] === ")") list.small--;

//       if (s[l] === "[") list.large++;
//       if (s[l] === "{") list.middle++;
//       if (s[l] === "(") list.small++;

//       if (list.large === -1 || list.middle === -1 || list.small === -1) {
//         break;
//       } else if (l === s.length - 1) {
//         answer++;
//       }
//     }
//   }

//   return answer;
// }
