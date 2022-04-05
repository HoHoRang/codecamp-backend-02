/*
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

제한 사항
두 수는 1이상 1000000이하의 자연수입니다.
*/
function solution(n, m) {
  const max = Math.max(n, m);
  const min = Math.min(n, m);

  let maxDivide;
  let minMulti;

  for (let i = min; i >= 1; i--) {
    if (n % i === 0 && m % i === 0) {
      maxDivide = i;
      break;
    }
  }

  for (let i = max; i <= m * n; i++) {
    if (i % n === 0 && i % m === 0) {
      minMulti = i;
      break;
    }
  }

  return [maxDivide, minMulti];
}

// function solution(n, m) {
//   let a = Math.max(n, m);
//   let b = Math.min(n, m);
//   let r = 0;

//   while (a % b > 0) {
//     r = a % b;
//     a = b;
//     b = r;
//   }

//   return [n, (n * m) / b];
// }
