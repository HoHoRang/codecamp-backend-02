import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

interface IOAuthUser {
  user: Pick<
    User,
    | 'userLoginId'
    | 'userPassword'
    | 'userName'
    | 'userRrn'
    | 'userPhone'
    | 'userEmail'
    | 'userNickname'
  >;
}

@Controller()
export class AuthController {
  constructor(
    private readonly userService: UserService, //
    private readonly authService: AuthService,
  ) {}

  @Get('/login/google')
  @UseGuards(AuthGuard('google'))
  async loginGoogle(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    // 1. 가입확인
    let user = await this.userService.findOneByEmail({
      email: req.user.userEmail,
    });

    // 2. 회원가입
    if (!user) {
      const createUserInput = {
        userLoginId: req.user.userLoginId,
        userPassword: req.user.userPassword,
        userName: req.user.userName,
        userRrn: req.user.userRrn,
        userPhone: req.user.userPhone,
        userEmail: req.user.userEmail,
        userNickname: req.user.userNickname,
      };

      user = await this.userService.create({ createUserInput });
    }

    // 3. 로그인
    this.authService.setRefreshToken({ user, res });

    res.redirect(
      'http://localhost:5500/main-project/frontend/login/index.html',
    );
  }
}
