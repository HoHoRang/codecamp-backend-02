/*
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

제한사항
nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
*/
function solution(nums) {
  var answer = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let l = i + 1; l < nums.length - 1; l++) {
      for (let j = l + 1; j < nums.length; j++) {
        const sum = nums[i] + nums[l] + nums[j];

        let count = 0;
        // 소수를 찾는 for문 === 소수는 1과 자신으로만 나누어져야 한다.
        for (let o = 1; o <= sum; o++) {
          if (sum % o === 0) {
            // 나누어 떨어지면 count를 하나씩 증가
            count++;
          }

          // 소수라면, 1과 자신으로만 나누어져야 하기 때문에, count 값이 2를 넘지 않아야 한다.
          if (count > 2) {
            // 소수가 아니다.
            break;
          }
        }
        // 소수가 맞다.
        if (count === 2) {
          answer++;
        }
      }
    }
  }

  return answer;
}

// function solution(nums) {
//   let answer = 0;
//   let idx = 0;

//   nums.forEach((num1, i) => {
//     idx = i + 1;
//     nums.slice(idx).forEach((num2) => {
//       idx++;
//       nums.slice(idx).forEach((num3) => {
//         const sum = num1 + num2 + num3;

//         let count = 0;

//         if (sum % 2 === 1) {
//           for (let o = 1; o <= sum; o++) {
//             if (sum % o === 0) {
//               count++;
//             }

//             if (count > 2) {
//               break;
//             }
//           }
//         }

//         if (count === 2) {
//           answer++;
//         }
//       });
//     });
//   });
//   return answer;
// }
