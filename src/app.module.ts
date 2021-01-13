import { Module } from '@nestjs/common';
import { MoviesControllerController } from './movies-controller/movies-controller.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesControllerController],
  providers: [MoviesService],
})
export class AppModule {}
