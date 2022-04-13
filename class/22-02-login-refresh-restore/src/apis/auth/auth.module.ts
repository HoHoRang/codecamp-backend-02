import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtRefreshStrategy } from 'src/commons/auth/jwt-refresh.strategy';
import { Users } from '../users/entities/users.entity';
import { UsersService } from '../users/users.service';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({}), //
    TypeOrmModule.forFeature([Users]),
  ],
  providers: [
    JwtRefreshStrategy,
    AuthResolver, //
    AuthService,
    UsersService,
  ],
})
export class AuthModule {}
