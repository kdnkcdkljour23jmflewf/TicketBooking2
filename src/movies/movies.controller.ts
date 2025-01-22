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
            const { title = '', releaseDate = '' } = req.body
            const movie_search = await this.moviesService.searchMovie(title)
            if(movie_search == null){
                const movie_data = await this.moviesService.addmovie(title, releaseDate)
                return {
                    success: true,
                    message: 'Movie data added'
                }
            }else{
                return {
                    success: false,
                    message: 'Movie data exist'
                }
            }
        } catch (error) {
            throw new HttpException('Forbidden resource', HttpStatus.FORBIDDEN)
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post('updatemovie') 
    async updatemovie(@Request() req) {
        try {
            const { title = '', releaseDate = '',id='' } = req.body
            const movie_search = await this.moviesService.searchMovieById(id)
            if(movie_search){
                const movie_data = await this.moviesService.updatemovie(title, new Date(releaseDate),id)
                return {
                    success: true,
                    message: 'Movie data updated',
                    movie:movie_data
                }
            }else{
                return {
                    success: false,
                    message: 'Movie not found',
                  };
            }
        } catch (error) {
            throw new HttpException('Forbidden resource', HttpStatus.FORBIDDEN)
        }
    }
    @UseGuards(JwtAuthGuard)
    @Post('deletemovie') 
    async deletemovie(@Request() req) {
        try {
            const { id='' } = req.body
            const movie_search = await this.moviesService.searchMovieById(id)
            if(movie_search){
                const movie_data = await this.moviesService.deletemovie(id)
                return {
                    success: true,
                    message: 'Movie deleted Successfully',
                    movie:movie_data
                }
            }else{
                return {
                    success: false,
                    message: 'Movie not found',
                  };
            }
        } catch (error) {
            throw new HttpException('Forbidden resource', HttpStatus.FORBIDDEN)
        }
    }
}
