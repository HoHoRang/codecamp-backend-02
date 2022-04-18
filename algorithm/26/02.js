/*
0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.

x의 모든 0을 제거합니다.
x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.

0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. 
s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 
이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.

제한사항
s의 길이는 1 이상 150,000 이하입니다.
s에는 '1'이 최소 하나 이상 포함되어 있습니다.
*/
function solution(s) {
  let changeCount = 0;
  let removeCount = 0;

  let prevLength = 0;

  while (s !== "1") {
    prevLength = s.length;
    let temp = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== "0") {
        temp += s[i];
      }
    }
    //s = s.replaceAll("0", "");
    s = temp.slice();
    changeCount++;
    removeCount += prevLength - s.length;
    s = s.length.toString(2);
  }

  return [changeCount, removeCount];
}

// function solution(s) {
//   let count = 0;
//   let remove = 0;

//   while (s !== "1") {
//     count++;

//     let temp = "";
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === "0") {
//         remove++;
//         continue;
//       }
//       temp += s[i];
//     }

//     s = temp.length;
//     s = s.toString(2);
//   }
//   return [count, remove];
// }

// function solution(s) {
//   let [count, remove] = [0, 0];

//   function recursion() {
//     if (s === "1") {
//       return [count, remove];
//     }

//     remove += s.split("").filter((el) => el === "0").length;

//     s = s.split("").filter((el) => el === "1").length;
//     s = s.toString(2);

//     count++;
//     return recursion();
//   }

//   return recursion();
// }
