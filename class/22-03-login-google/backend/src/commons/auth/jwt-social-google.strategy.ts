import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';

@Injectable()
export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientId: '입력하기',
      clientSecret: '입력하기',
      callbackURL: '입력하기',
      scope: ['email', 'profile'], // 소셜 서비스마다 다름
    });
  }

  validate(accessToken: string, refreshToken: string, profile: any) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    return {
      email: profile.emails[0].value,
      password: '1111',
      name: profile.displayName,
      age: 0,
    };
  }
}
