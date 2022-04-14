import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

interface IOAuthUser {
  user: Pick<User, 'userName' | 'userEmail' | 'userPhone' | 'userPassword'>;
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
    this.checkUserAndRefreshToken({ req, res });
  }

  @Get('/login/naver')
  @UseGuards(AuthGuard('naver'))
  async loginNaver(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    this.checkUserAndRefreshToken({ req, res });
  }

  @Get('/login/kakao')
  @UseGuards(AuthGuard('kakao'))
  async loginKakao(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    this.checkUserAndRefreshToken({ req, res });
  }

  async checkUserAndRefreshToken({ req, res }) {
    // 1. 가입확인
    let user = await this.userService.findOneByEmail({
      email: req.user.userEmail,
      provider: req.user.provider,
    });

    // 2. 회원가입
    if (!user) {
      const createUserInput = {
        userName: req.user.userName,
        userEmail: req.user.userEmail,
        userPhone: req.user.userPhone,
        userPassword: req.user.userPassword,
        provider: req.user.provider,
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
