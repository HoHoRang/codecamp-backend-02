//문자열을 정수로 바꾸기
/*
문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

제한 조건
s의 길이는 1 이상 5이하입니다.
s의 맨앞에는 부호(+, -)가 올 수 있습니다.
s는 부호와 숫자로만 이루어져있습니다.
s는 "0"으로 시작하지 않습니다.

입출력 예
예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.
*/

function solution(s) {
  var answer = 0;

  if (s[0] === "-") {
    answer = Number(s.substr(1)) * -1;
  } else {
    answer = Number(s);
  }

  return answer;

  //return Number(s);
  //아래 방법은 추천하지 않음(협업시 일반적으로 사용하는 방법을 사용하는게 좋음)
  //return +s;
  //return s / 1;
  //return s * 1;
}
