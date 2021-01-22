import { Module } from '@nestjs/common';
import { MoviesControllerController } from 'src/movies-controller/movies-controller.controller';
import { MoviesService } from './movies.service';

@Module({
    controllers:[MoviesControllerController],
    providers:[MoviesService]
})
export class MoviesModule {}
