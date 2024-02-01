import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { MoviesModule } from './movies/movies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtStrategy } from './guards/jwt.strategy';


@Module({
  imports: [LoginModule, RegisterModule, MoviesModule,
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '2h' },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',  
      database: 'ticketbooking',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // Only in development
    })
  ],
  controllers: [AppController],
  providers: [AppService,JwtAuthGuard, JwtStrategy],
})
export class AppModule {} 
