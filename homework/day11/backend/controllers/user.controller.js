import { UserService } from "./services/user.service.js";

export class UserController {
  enrollUser = async (req, res) => {
    const userService = new UserService(req.body);

    const existData = await userService.getPhoneInfo();

    if (existData !== null && existData.isAuth) {
      const saveId = await userService.saveUserInfo();
      console.log("User 정보 저장 완료");

      await userService.sendUserMail();
      console.log("가입 환영 메일 전송 완료");

      await res.send(saveId);
    } else {
      console.log("핸드폰 번호 미인증");
      await res.status(422).send("에러!! 핸드폰 번호가 인증되지 않았습니다");
    }
  };

  getUser = async (req, res) => {
    // 1. DB에 저장된 User 목록 조회
    const userService = new UserService();
    const result = await userService.getUserList();

    console.log("User 정보 반환 완료");

    // 2. 꺼내온 결과 응답 주기
    res.send(result);
  };
}
