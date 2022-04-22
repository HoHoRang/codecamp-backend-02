/*
스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

[제한사항]
numbers 배열의 크기는 1 이상 1,000 이하입니다.
numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
hand는 "left" 또는 "right" 입니다.
"left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.
*/
function solution(numbers, hand) {
  let result = "";
  let left = "*";
  let right = "#";

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      result += "L";
      left = numbers[i];
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      result += "R";
      right = numbers[i];
    } else {
      const leftDistance = distance(left, numbers[i]);
      const rightDistance = distance(right, numbers[i]);

      if (leftDistance === rightDistance) {
        if (hand === "left") {
          result += "L";
          left = numbers[i];
        } else {
          result += "R";
          right = numbers[i];
        }
      } else if (leftDistance < rightDistance) {
        result += "L";
        left = numbers[i];
      } else {
        result += "R";
        right = numbers[i];
      }
    }
  }

  return result;
}

function distance(a, b) {
  keyPad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  const aCor = [];
  const bCor = [];

  for (let i = 0; i < keyPad.length; i++) {
    for (let j = 0; j < 3; j++) {
      if (a === keyPad[i][j]) {
        aCor.push(i);
        aCor.push(j);
      }
      if (b === keyPad[i][j]) {
        bCor.push(i);
        bCor.push(j);
      }
    }
  }

  // i와 j의 차이만큼 더하면 거리가 나옴
  const dist = Math.abs(aCor[0] - bCor[0]) + Math.abs(aCor[1] - bCor[1]);

  return dist;
}

// function solution(numbers, hand) {
//   let answer = "";
//   const leftNumbers = [1, 4, 7]; // 왼쪽 키패드에 해당하는 숫자를 배치
//   const rightNumbers = [3, 6, 9]; // 오른쪽 키패드에 해당하는 숫자를 배치

//   const current = {
//     left: 10,
//     right: 12,
//   };

//   for (let i = 0; i < numbers.length; i++) {
//     if (leftNumbers.includes(numbers[i])) {
//       answer += "L";
//       current.left = numbers[i];
//     } else if (rightNumbers.includes(numbers[i])) {
//       answer += "R";
//       current.right = numbers[i];
//     } else {
//       const locationObj = { ...current };

//       for (let hand in locationObj) {
//         // 0번을 눌렀을 때의 예외 처리
//         numbers[i] = numbers[i] === 0 ? 11 : numbers[i];
//         // 왼쪽과 오른쪽 엄지손가락으로부터 거리값 계산
//         let location = numbers[i] - locationObj[hand];

//         // 거리 차이가 3칸 이상일 때는 위 아래로 이동할 수 있다.
//         if (location >= 3) {
//           location = Math.trunc(location / 3) + (location % 3);
//         }
//         locationObj[hand] = location;
//       }

//       if (locationObj["left"] === locationObj["right"]) {
//         answer += hand === "left" ? "L" : "R";
//         current[hand] = numbers[i];
//       } else {
//         if (locationObj["left"] > locationObj["right"]) {
//           answer += "R";
//           current["right"] = numbers[i];
//         } else {
//           answer += "L";
//           current["left"] = numbers[i];
//         }
//       }
//     }
//   }
//   return answer;
// }

// function solution(numbers, hand) {
//   const [leftNumbers, rightNumbers] = [
//     [1, 4, 7],
//     [3, 6, 9],
//   ];

//   const current = {
//     left: 10,
//     right: 12,
//   };

//   return numbers.reduce((acc, cur) => {
//     // useFinger: 어떤 손가락으로 눌렀는지에 대한 최종 리턴값 ("L", "R")
//     // target: 왼손인지 오른손인지 ("left", "right")
//     // number: 최종적으로 누른 번호 키패드 (숫자, 0 ~ 9)
//     let [useFinger, target, number] = ["", "", 0];

//     if (leftNumbers.includes(cur)) {
//       [useFinger, target, number] = ["L", "left", cur];
//     } else if (rightNumbers.includes(cur)) {
//       [useFinger, target, number] = ["R", "right", cur];
//     } else {
//       const locationObj = Object.entries(current).reduce((acc2, cur2) => {
//         const targetHand = cur2[0];

//         cur = cur === 0 ? 11 : cur;
//         let location = Math.abs(cur - cur2[1]);

//         if (location > 2) {
//           location = Math.trunc(location / 3) + (location % 3);
//         }

//         acc2[targetHand] = location;
//         return acc2;
//       }, {});

//       if (locationObj["left"] === locationObj["right"]) {
//         [useFinger, target, number] = [
//           hand === "left" ? "L" : "R",
//           hand === "left" ? hand : "right",
//           cur,
//         ];
//       } else if (locationObj["left"] > locationObj["right"]) {
//         [useFinger, target, number] = ["R", "right", cur];
//       } else {
//         [useFinger, target, number] = ["L", "left", cur];
//       }
//     }
//     current[target] = number;
//     return acc + useFinger;
//   }, "");
// }
