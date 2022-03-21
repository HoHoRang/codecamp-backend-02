// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";

  const myPhone =
    document.querySelector("#PhoneNumber01").value +
    document.querySelector("#PhoneNumber02").value +
    document.querySelector("#PhoneNumber03").value;

  axios
    .post("http://localhost:3001/tokens/phone", {
      myPhone: myPhone,
    })
    .then((res) => {
      console.log(res.data);
    });

  console.log("인증 번호 전송");
};

// 회원 가입 API 요청
const submitSignup = async () => {
  const myName = document.querySelector("#SignupName").value;
  const myRegistrationNumber =
    document.querySelector("#SignupPersonal").value +
    "-" +
    document.querySelector("#SignupPersonal2").value;
  const myPhone =
    document.querySelector("#PhoneNumber01").value +
    document.querySelector("#PhoneNumber02").value +
    document.querySelector("#PhoneNumber03").value;
  const myPreferSite = document.querySelector("#SignupPrefer").value;
  const myPassword = document.querySelector("#SignupPwd").value;
  const myEmail = document.querySelector("#SignupEmail").value;

  const user = {
    myName: myName,
    myRegistrationNumber: myRegistrationNumber,
    myPhone: myPhone,
    myPreferSite: myPreferSite,
    myPassword: myPassword,
    myEmail: myEmail,
  };

  axios
    .post("http://localhost:3001/users", {
      user: user,
    })
    .then((res) => {
      console.log(res.data);
    });

  console.log("회원 가입 이메일 전송");
};
