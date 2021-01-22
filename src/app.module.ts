import { Module } from '@nestjs/common';
import { MoviesControllerController } from './movies-controller/movies-controller.controller';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
