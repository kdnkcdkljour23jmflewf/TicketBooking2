import { Controller,Post,Body, UseGuards,Request } from '@nestjs/common';
// import { LocalAuthGuard } from './local-auth.guard';
import { LoginService } from './login.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Controller('login')
export class LoginController {
    constructor(private LoginService:LoginService,
        private readonly jwtService: JwtService,
        ){
        
    }
//  @UseGuards(LocalAuthGuard)
 @Post('login')
    async  login(@Request() req) {
        let {email,password} = req.body
            
            const user = await this.LoginService.findOneByUsername(email)
            if(!user){
                return { message: 'Invalid credentials' }
            }
            const password_match = await bcrypt.compare(password,user.password)
            if(!password_match){
                return { message: 'Password does not match' }
            }            
            const payload = { email: email, password: password }
            return {
                access_token: this.jwtService.sign(payload),
            }
    }
}
