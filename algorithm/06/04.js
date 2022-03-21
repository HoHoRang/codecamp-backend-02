/*
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

arr은 길이 1 이상, 100 이하인 배열입니다.
arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

reduce() 함수는... 

배열(arr)의 각 element들에 대해서 

파라미터로 입력받은 callback 함수를 실행하여,

하나의 리턴값을 반환하는 함수입니다.

callback 함수는 배열(arr)의 모든 element를 대상으로 한번씩 호출됩니다.

이 때, callback 함수에서 리턴되는 값은,

다음 element에 대한 callback 함수 실행시 파라미터(accumulator)로 입력되어 활용될 수 있습니다.

배열의 모든 element들에 대해 callback 함수 실행이 완료되면,

reduce() 함수는 마지막 element의 callback 함수의 리턴값을 리턴합니다.

따라서, reduce() 함수를 사용하면, 배열을 순차적으로 순회하면서 배열의 값을 누적하는데 유용합니다.

arr.reduce(callback(accumulator, currentValue [, currentIndex[, array]]) [, initialValue])

initialValue가 생략된 경우, 첫번째 요소가 accumulator에 들어가고 두번째 요소부터 시작하는 듯
*/
function solution(arr) {
  var answer = 0;

  answer =
    arr.reduce((sum, curr) => {
      return sum + curr;
    }, 0) / arr.length;

  return answer;
}
