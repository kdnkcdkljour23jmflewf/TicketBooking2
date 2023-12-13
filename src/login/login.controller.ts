import { Controller,Post,Body, UseGuards,Request } from '@nestjs/common';
// import { LocalAuthGuard } from './local-auth.guard';
import { LoginService } from './login.service';
// import { JwtService } from '@nestjs/jwt';

@Controller('login')
export class LoginController {
    constructor(private LoginService:LoginService){
        
    }
//  @UseGuards(LocalAuthGuard)
 @Post('login')
    async  login(@Request() req) {
        let {email,password} = req.body
            const payload = { email: email, password: password }
            const user = await this.LoginService.findOneByUsername(email)
            console.log(9999,user)
        //     return {
        //       access_token: this.jwtService.sign(payload),
        //     }
        //  }
    }
}
