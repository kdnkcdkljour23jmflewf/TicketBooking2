import { Module } from '@nestjs/common';
import { SeatsController } from './seats.controller';
import { SeatsService } from './seats.service';
import { Seats } from './seats.entity';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { JwtSharedModule } from '../jwt/jwt.module'; // Import the shared module
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  controllers: [SeatsController],
  providers: [SeatsService]
})
export class SeatsModule {}
