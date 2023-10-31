import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // Ensure this import
import { Repository } from 'typeorm';
import { Register } from './register.entity';

@Injectable()
export class RegisterService {
    constructor(
        @InjectRepository(Register) // Inject the repository for the Movie entity
        private registerRepository: Repository<Register>,
      ) {}
}
