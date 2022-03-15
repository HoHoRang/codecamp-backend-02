function getTemplate({ email, registrationNumber, phoneNumber, favoriteSite }) {
  console.log(`
    <html>
      <body>
        <h1>가입을 환영합니다.</h1>
        <hr>
        <div>이메일: ${email}</div>
        <div>주민번호: ${registrationNumber}</div>
        <div>휴대폰 번호: ${phoneNumber}</div>
        <div>좋아하는 사이트: ${favoriteSite}</div>
      </body>
    </html>
  `);
}

const myInfo = {
  email: "wisehero7@gmail.com",
  registrationNumber: "920205-1******",
  phoneNumber: "010-3386-9380",
  favoriteSite: "youtube.com",
};

getTemplate(myInfo);
