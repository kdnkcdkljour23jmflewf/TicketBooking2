import { Controller,Post,Body, UseGuards,Request } from '@nestjs/common';
import {MoviesService} from './movies.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('movies')
@UseGuards(JwtAuthGuard)
export class MoviesController {
    constructor(private MoviesService:MoviesService){}
    @Post('addmovie')
    async  addmovie(@Request() req) {
        let {
        title = '',
        releaseDate = ''} = req.body
        const movie_data = await this.MoviesService.addmovie(title,releaseDate)
        return {
            success:true,
            message:'Movie Data added'
        }
    }
}
