import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtGoogleStrategy } from 'src/commons/auth/jwt-social-google.strategy';
import { Users } from '../users/entities/users.entity';
import { UsersService } from '../users/users.service';
import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({}), //
    TypeOrmModule.forFeature([Users]),
  ],
  providers: [
    JwtGoogleStrategy,
    AuthResolver, //
    AuthService,
    UsersService,
  ],
  controllers: [
    AuthController, //
  ],
})
export class AuthModule {}
