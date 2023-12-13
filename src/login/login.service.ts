import { Injectable } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Register } from '../register/register.entity'

@Injectable()
export class LoginService {
  constructor(@InjectRepository(Register)
  private usersRepository: Repository<Register>,
  ) {}

  // constructor(){}

  async validateUser(username: string, password: string): Promise<any> {
    
    return null;
  }
  async findOneByUsername(email:string): Promise<any>    {
    const user = await this.usersRepository.findOne({where:{email}})
    return user
  }
}

