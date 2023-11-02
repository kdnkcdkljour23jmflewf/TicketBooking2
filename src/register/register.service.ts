import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm' // Ensure this import
import { Repository } from 'typeorm'
import { Register } from './register.entity'
import * as bcrypt from 'bcrypt'


@Injectable()
export class RegisterService {
    constructor(  
        @InjectRepository(Register) // Inject the repository for the Movie entity
        private registerRepository: Repository<Register>,
      ) {}

      async registerUser(username: string, email: string, password: string): Promise<Register> {
        const hashedPassword = await bcrypt.hash(password, 10) // Hash the password
    
        const user = new Register()
        user.username = username
        user.email = email
        user.password = hashedPassword
    
        return this.registerRepository.save(user)
      }

      async userExists(username: string, email: string): Promise<boolean> {
        const user = await this.registerRepository
          .createQueryBuilder('register')
          .where('register.username = :username OR register.email = :email', {
            username,
            email,
          })
          .getOne();
        return !!user;
      }
}
