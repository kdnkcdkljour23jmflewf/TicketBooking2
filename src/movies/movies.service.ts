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
}
