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
}