import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { Register } from '../register/register.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: 
  [
    TypeOrmModule.forFeature([Register]),
    JwtModule.register({
      secret: 'your-secret-key', // replace with your actual secret key
      signOptions: { expiresIn: '2h' }, // you can adjust the expiration time
    })
  ],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
