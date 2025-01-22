import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // Ensure this import
import { Repository } from 'typeorm';
import { Movie } from './movies.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) // Inject the repository for the Movie entity
    private movieRepository: Repository<Movie>,
  ) {}

  async addmovie(titledata:string,releaseDatedata:Date):Promise<Movie>{
    const movie = new Movie()
    movie.title = titledata
    movie.releaseDate = new Date(releaseDatedata)
    return this.movieRepository.save(movie)
  }
  async searchMovieById(id:number):Promise<Movie>{
    return this.movieRepository.findOne({where:{id}})
  }
  async updatemovie(title:string,releaseDate:Date,id:number):Promise<Movie>{
    const movie = await this.searchMovieById(id)
    movie.title = title;
    movie.releaseDate = releaseDate;
    await this.movieRepository.save(movie);
    return movie;
  }
  async searchMovie(title:string):Promise<Movie | undefined>{{
    return this.movieRepository.findOne({ where: { title } }); 
  }}

  async deletemovie(id:number):Promise<Movie | undefined>{
    this.movieRepository.delete(id)
    return this.movieRepository.findOne({where:{id}})
  }
}