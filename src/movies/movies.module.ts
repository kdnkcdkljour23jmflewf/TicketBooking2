import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movies.entity';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
// import { JwtStrategy } from '../guards/jwt.strategy';
@Module({
  imports: [
    JwtModule,
        TypeOrmModule.forFeature([Movie])
    ],
  providers: [MoviesService,JwtAuthGuard],
  // providers: [MoviesService,JwtAuthGuard,JwtStrategy],
  controllers: [MoviesController],
})
export class MoviesModule {} 
