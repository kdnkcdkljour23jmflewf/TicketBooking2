import { Controller, Post, UseGuards, Request, HttpException, HttpStatus } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';

@Controller('movies')
export class MoviesController {
    constructor(
        private moviesService: MoviesService,
        private readonly jwtService: JwtService,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Post('addmovie') 
    async addmovie(@Request() req) {
        try {
            const { title = '', releaseDate = '' } = req.body;
            const movie_data = await this.moviesService.addmovie(title, releaseDate);
            
            return {
                success: true,
                message: 'Movie data added'
            };
        } catch (error) {
            throw new HttpException('Forbidden resource', HttpStatus.FORBIDDEN);
        }
    }
}
