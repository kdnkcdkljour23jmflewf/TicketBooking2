import { Controller,Post,Body } from '@nestjs/common'
import {RegisterService} from './register.service'
import { Console } from 'console';

@Controller('register')
export class RegisterController {
    constructor(private RegisterService: RegisterService) {}

  @Post('register')
  async register(@Body() data: { username: string; email: string; password: string }) {
    const { username, email, password } = data
    let user_data = await this.RegisterService.userExists(username, email)
    if(!user_data){
        const user = await this.RegisterService.registerUser(username, email, password)
        return { message: 'User registered successfully', user }  
    }else{
        return { message: 'User already registered'}  
    }
  } 
  
} 
 