import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDTO } from 'src/movies/dto/create-movie.dto';
import { UpdateMovieDTO } from 'src/movies/dto/update-movie.dto';
import { Movie } from 'src/movies/entities/movie.entity';
import { MoviesService } from 'src/movies/movies.service';


@Controller('movies')
export class MoviesControllerController {

    constructor(private readonly moviesService:MoviesService){}


    @Get()
    getAll():Movie[]{
        return this.moviesService.getAll();
    }
    // @query => query parameter 받기
    //
    @Get("/search")
    search(@Query("year") searchingYear:string){
        return `We are searching for a movie with a title made after: ${searchingYear}`;
    }

    @Get("/:id")
    getOne(@Param("id") movieId:string):Movie{
        return this.moviesService.getOne(movieId);
    }
    //request body 가져옴
    @Post()
    create(@Body() movieData:CreateMovieDTO){
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param('id') movieId:string){
        return this.moviesService.deleteOne(movieId);
    }
    //update
    @Patch("/:id")
    path(@Param('id') movieId:string,@Body() updateData:UpdateMovieDTO){
        return this.moviesService.update(movieId,updateData);
    }

    
}
