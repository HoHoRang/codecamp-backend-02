/*
import { StoreResolver } from '../../main-project/backend/src/apis/store/store.resolver';
선행 스킬이란 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 뜻합니다.

예를 들어 선행 스킬 순서가 스파크 → 라이트닝 볼트 → 썬더일때, 썬더를 배우려면 먼저 라이트닝 볼트를 배워야 하고, 라이트닝 볼트를 배우려면 먼저 스파크를 배워야 합니다.

위 순서에 없는 다른 스킬(힐링 등)은 순서에 상관없이 배울 수 있습니다. 
따라서 스파크 → 힐링 → 라이트닝 볼트 → 썬더와 같은 스킬트리는 가능하지만, 썬더 → 스파크나 라이트닝 볼트 → 스파크 → 힐링 → 썬더와 같은 스킬트리는 불가능합니다.

선행 스킬 순서 skill과 유저들이 만든 스킬트리1를 담은 배열 skill_trees가 매개변수로 주어질 때, 가능한 스킬트리 개수를 return 하는 solution 함수를 작성해주세요.

제한 조건
스킬은 알파벳 대문자로 표기하며, 모든 문자열은 알파벳 대문자로만 이루어져 있습니다.
스킬 순서와 스킬트리는 문자열로 표기합니다.
예를 들어, C → B → D 라면 "CBD"로 표기합니다
선행 스킬 순서 skill의 길이는 1 이상 26 이하이며, 스킬은 중복해 주어지지 않습니다.
skill_trees는 길이 1 이상 20 이하인 배열입니다.
skill_trees의 원소는 스킬을 나타내는 문자열입니다.
skill_trees의 원소는 길이가 2 이상 26 이하인 문자열이며, 스킬이 중복해 주어지지 않습니다.
*/
function solution(skill, skill_trees) {
  let count = 0;
  const skillArr = skill.split("");

  for (let i = 0; i < skill_trees.length; i++) {
    const aaa = skill_trees[i]
      .split("")
      .filter((el) => {
        return skillArr.includes(el);
      })
      .join("");
    if (skill.startsWith(aaa)) {
      count++;
    }
  }

  return count;
}

// function solution(skill, skill_trees) {
//   let answer = 0;

//   for (let i = 0; i < skill_trees.length; i++) {
//     let filter = "";
//     for (let l = 0; l < skill_trees[i].length; l++) {
//       if (skill.includes(skill_trees[i][l])) {
//         filter += skill_trees[i][l];
//       }
//     }

//     if (filter === "") filter = skill;
//     if (skill.includes(filter)) {
//       if (skill.indexOf(filter[0]) === 0) {
//         answer++;
//       }
//     }
//   }
//   return answer;
// }

// function solution(skill, skill_trees) {
//   return skill_trees.reduce((acc, cur) => {
//     const filter = cur
//       .split("")
//       .filter((str) => {
//         return skill.includes(str);
//       })
//       .join("");

//     return (acc +=
//       (skill.includes(filter) && skill.indexOf(filter[0]) === 0) ||
//       filter === ""
//         ? 1
//         : 0);
//   }, 0);
// }
