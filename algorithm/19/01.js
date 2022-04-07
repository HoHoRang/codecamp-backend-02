/*
수포자는 수학을 포기한 사람의 준말입니다. 
수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
*/
function solution(answers) {
  const temp = new Array(answers.length).fill(1);

  const stu1 = temp.map((_, idx) => {
    return (idx % 5) + 1;
  });

  const stu2 = temp.map((_, idx) => {
    if (idx % 2 === 0) {
      return 2;
    } else if (idx % 8 === 1) {
      return 1;
    } else if (idx % 8 === 3) {
      return 3;
    } else if (idx % 8 === 5) {
      return 4;
    } else if (idx % 8 === 7) {
      return 5;
    }
  });

  const stu3 = temp.map((_, idx) => {
    if (idx % 10 === 0 || idx % 10 === 1) {
      return 3;
    } else if (idx % 10 === 2 || idx % 10 === 3) {
      return 1;
    } else if (idx % 10 === 4 || idx % 10 === 5) {
      return 2;
    } else if (idx % 10 === 6 || idx % 10 === 7) {
      return 4;
    } else if (idx % 10 === 8 || idx % 10 === 9) {
      return 5;
    }
  });

  const count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === stu1[i]) {
      count[0]++;
    }
    if (answers[i] === stu2[i]) {
      count[1]++;
    }
    if (answers[i] === stu3[i]) {
      count[2]++;
    }
  }

  const max = Math.max(...count);
  const result = [];

  for (let i = 0; i <= 2; i++) {
    if (max === count[i]) {
      result.push(i);
    }
  }

  return result;
}

// const answerTable = [
//   [1, 2, 3, 4, 5],
//   [2, 1, 2, 3, 2, 4, 2, 5],
//   [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
// ];

// function solution(answers) {
//   const answer = [0, 0, 0];

//   for (let i = 0; i < answers.length; i++) {
//     for (let l = 0; l < answerTable.length; l++) {
//       if (answerTable[l][i % answerTable[l].length] === answers[i]) {
//         answer[l]++;
//       }
//     }
//   }

//   const biggest = Math.max(...answer);
//   const result = [];

//   for (let i = 0; i < answer.length; i++) {
//     if (answer[i] === biggest) {
//       result.push(i + 1);
//     }
//   }
//   return result;
// }

// const answerTable = [
//   [1, 2, 3, 4, 5],
//   [2, 1, 2, 3, 2, 4, 2, 5],
//   [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
// ];

// function solution(answers) {
//   const scoreList = answerTable.map((el, i) => {
//     const score = answers.reduce((acc, cur, idx) => {
//       return acc + (el[idx % el.length] === cur ? 1 : 0);
//     }, 0);
//     return { student: i + 1, score };
//   });

//   const biggest = Math.max(
//     ...scoreList.map((el) => {
//       return el.score;
//     })
//   );

//   return scoreList
//     .filter((el) => {
//       return el.score === biggest;
//     })
//     .map((el) => el.student);
// }
