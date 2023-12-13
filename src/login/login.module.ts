import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { Register } from '../register/register.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Register])],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
