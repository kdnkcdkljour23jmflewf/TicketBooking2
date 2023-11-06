import { Controller, UseGuards } from '@nestjs/common';
// import { LocalAuthGuard } from './local-auth.guard';
import { LoginService } from './login.service';
// import { JwtService } from '@nestjs/jwt';

@Controller('login')
export class LoginController {
//  @UseGuards(LocalAuthGuard)
//  @Post('login')   
//  async function login(@Request req) {
//     const payload = { username: req.user.username, sub: req.user.userId };
//     return {
//       access_token: this.jwtService.sign(payload),
//     }
//  }
}
