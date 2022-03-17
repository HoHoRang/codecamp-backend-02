//반복문 : 가장 큰 수 찾기
/*
 */
function bigNum(str) {
  let biggest = Number(str[0]);
  for (let i = 1; i < str.length; i++) {
    if (Number(str[i]) > biggest) {
      biggest = Number(str[i]);
    }
  }
  console.log(biggest);
}

bigNum("87135");
