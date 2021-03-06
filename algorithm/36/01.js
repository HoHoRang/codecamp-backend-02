/*
무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.

예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.

구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.

사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

제한사항
무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.

*/
function solution(people, limit) {
  // 내림차순 정렬
  people = people.sort((a, b) => b - a);

  let boatCount = 0;
  let j = people.length - 1;

  for (let i = 0; i <= j; i++) {
    let boatWeight = limit;
    const person = people[i];

    boatWeight -= person;

    if (boatWeight < 40) {
      boatCount++;
    } else {
      const person2 = people[j];

      if (boatWeight >= person2) {
        j--;
      }
      boatCount++;
    }
  }
  return boatCount;
}

function solution(people, limit) {
  people.sort((a, b) => b - a);

  let last = people.length - 1;

  return people.reduce((acc, cur, i) => {
    if (i <= last) {
      const weight = limit - cur;
      acc++;

      if (weight >= people[last]) {
        last--;
      }
    }

    return acc;
  }, 0);
}

// function solution(people, limit) {
//   let answer = 0;
//   people.sort((a, b) => b - a);

//   let last = people.length - 1;
//   for (let i = 0; i < people.length; i++) {
//     const weight = limit - people[i];
//     answer++;

//     // 가벼운 사람의 몸무게가 보트에 수용할 수 있는 몸무게보다 작을 경우(태울 수 있는 경우)
//     if (weight >= people[last]) {
//       last--;
//     }

//     // 대기열에 아무도 없는 경우
//     if (i >= last) {
//       return answer;
//     }
//   }
// }

// 효율성 통과 X
// function solution(people, limit) {
//   // 내림차순 정렬
//   people = people.sort((a, b) => b - a);

//   let boatCount = 0;

//   while (people.length !== 0) {
//     let boatWeight = limit;
//     const person = people[0];

//     boatWeight -= person;
//     people.shift(); // 첫번째 요소 제거

//     if (boatWeight < 40) {
//       boatCount++;
//     } else {
//       const person2 = people[people.length - 1];

//       if (boatWeight >= person2) {
//         people.pop(); // 마지막 요소 제거
//       }
//       boatCount++;
//     }
//   }
//   return boatCount;
// }
