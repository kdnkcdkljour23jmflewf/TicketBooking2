import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { Register } from '../register/register.entity'
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule.forFeature([Register]),
  // RouterModule.register([
  //   {path:'rgs', 
  //    module:RegisterModule}
  //  ]),
],
  controllers: [RegisterController],
  providers: [RegisterService]
})
export class RegisterModule {}
