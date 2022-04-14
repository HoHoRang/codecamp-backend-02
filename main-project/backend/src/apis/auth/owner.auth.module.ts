import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtRefreshStrategy } from 'src/commons/auth/jwt-refresh.strategy';
import { JwtGoogleStrategy } from 'src/commons/auth/jwt-social-google.strategy';
import { JwtKakaoStrategy } from 'src/commons/auth/jwt-social-kakao.strategy';
import { JwtNaverStrategy } from 'src/commons/auth/jwt-social-naver.strategy';
import { Owner } from '../owner/entities/owner.entity';
import { OwnerService } from '../owner/owner.service';
import { OwnerAuthController } from './owner.auth.controller';
import { OwnerAuthResolver } from './owner.auth.resolver';
import { OwnerAuthService } from './owner.auth.service';

@Module({
  imports: [
    JwtModule.register({}), //
    TypeOrmModule.forFeature([Owner]),
  ],
  providers: [
    JwtRefreshStrategy,
    JwtGoogleStrategy,
    JwtNaverStrategy,
    JwtKakaoStrategy,
    OwnerAuthResolver, //
    OwnerAuthService,
    OwnerService,
  ],
  controllers: [
    OwnerAuthController, //
  ],
})
export class OwnerAuthModule {}
