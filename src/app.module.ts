import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { MoviesModule } from './movies/movies.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [LoginModule, RegisterModule, MoviesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',  
      database: 'ticketbooking',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Only in development
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
