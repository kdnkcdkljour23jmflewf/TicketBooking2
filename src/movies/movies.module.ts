import { Module,MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movies.entity';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { JwtSharedModule } from '../jwt/jwt.module'; // Import the shared module
import { LoggerMiddleware } from '../middleware/logger.middleware';



@Module({
  imports: [
    JwtSharedModule,
        TypeOrmModule.forFeature([Movie])
    ],
  providers: [MoviesService,JwtAuthGuard],
  // providers: [MoviesService,JwtAuthGuard,JwtStrategy],
  controllers: [MoviesController],
})
export class MoviesModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware) // Apply LoggerMiddleware
      .forRoutes({ path: 'movies/addmovie', method: RequestMethod.POST }); // Exact match for your endpoint
  }}
