function getWelcomeTeplate({ myname, myage, myschool }) {
  //여기서 오늘날짜로 만들기!
  const aaa = new Date();
  const yyyy = aaa.getFullYear();
  const mm = aaa.getMonth() + 1;
  const dd = aaa.getDate();
  const createdAt = `${yyyy}-${mm}-${dd}`; //year + "-" + month + "-" + date;

  return `
    <html>
      <body>
        <h1>${myname}님 가입을 환영합니다.</h1>
        <hr>
        <div>이름: ${myname}</div>
        <div>나이: ${myage}살</div>
        <div>학교: ${myschool}</div>
        <div>가입일: ${createdAt}</div>
      </body>
    </html>
  `;
}

const myuser = {
  myname: "철수",
  myage: 13,
  myschool: "다람쥐초등학교",
};

console.log(getWelcomeTeplate(myuser));
