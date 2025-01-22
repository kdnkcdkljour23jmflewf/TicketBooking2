import { Controller, Post, UseGuards, Request, HttpException, HttpStatus } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { SeatsService } from './seats.service';

@Controller('seats')
export class SeatsController {
    @Post('addseat') 
    async addseat(@Request() req) {
        console.log('666666')
    }
}
