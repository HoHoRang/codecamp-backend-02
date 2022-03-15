const apple = 3;
const banana = 2;

console.log(
  "철수는 사과를 " +
    apple +
    "개, " +
    "바나나를 " +
    banana +
    "개 가지고 있습니다."
);

console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana}개 가지고 있습니다.`);

function getWelcomeTeplate(user) {
  return `
    <html>
      <body>
        <h1>${user.myname}님 가입을 환영합니다.</h1>
        <hr>
        <div>이름: ${user.myname}</div>
        <div>나이: ${user.myage}살</div>
        <div>학교: ${user.myschool}</div>
        <div>가입일: ${user.mycreatedAt}</div>
      </body>
    </html>
  `;
}

const myuser = {
  myname: "철수",
  myage: 13,
  myschool: "다람쥐초등학교",
  mycreatedAt: "2020-01-02",
};

console.log(getWelcomeTeplate(myuser));
