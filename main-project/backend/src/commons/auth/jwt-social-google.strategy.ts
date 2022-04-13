import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

@Injectable()
export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '997265593182-sdta4qh28ct7bl6idt7mhrtvg2o4v0m8.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/login/google',
      scope: ['email', 'profile'], // 소셜 서비스마다 다름
    });
  }

  validate(accessToken: string, refreshToken: string, profile: any) {
    console.log('======1======', accessToken);
    console.log('======2======', refreshToken);
    console.log('======3======', profile);
    return {
      // 구글에서 넘겨주지 않는 값은 default로 저장
      userEmail: profile.emails[0].value,
      userPassword: '1111',
      userName: profile.displayName,
      userLoginId: 'default',
      userRrn: '111111-1111111',
      userPhone: '010-0000-0000',
      userNickname: 'default_nickname',
    };
  }
}
