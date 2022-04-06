/*
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.
*/

// 효율성 통과 안됨
// function solution(participant, completion) {
//   for (let i = 0; i < completion.length; i++) {
//     participant.splice(participant.indexOf(completion[i]), 1);
//   }
//   return participant[0];
// }

// 갯수가 짝수가 아니면(1이거나 3이면) 완주하지 못한 선수임
function solution(participant, completion) {
  const obj = {};

  for (let i = 0; i < participant.length; i++) {
    if (obj[participant[i]] === undefined) {
      obj[participant[i]] = 1;
    } else {
      obj[participant[i]]++;
    }
  }

  for (let i = 0; i < completion.length; i++) {
    if (obj[completion[i]] === undefined) {
      obj[completion[i]] = 1;
    } else {
      obj[completion[i]]++;
    }
  }

  return Object.keys(obj).find((key) => obj[key] % 2 !== 0);
}

// function solution(participant, completion) {
//   participant.sort((a, b) => a - b);
//   completion.sort((a, b) => a - b);

//   return participant.filter((name, i) => {
//     return name !== completion[i];
//   })[0];
// }

// function solution(participant, completion) {
//   participant.sort((a, b) => a - b);
//   completion.sort((a, b) => a - b);

//   for (let i = 0; i < participant.length; i++) {
//     if (participant[i] != completion[i]) {
//       return participant[i];
//     }
//   }
// }

// var solution = (_, $) =>
//   _.find(
//     (_) => !$[_]--,
//     $.map((_) => ($[_] = ($[_] | 0) + 1))
//   );
