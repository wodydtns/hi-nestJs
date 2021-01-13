import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
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
    getOne(@Param("id") movieId:string){
        return `This will return one movie with the id: ${movieId}`;
    }
    //request body 가져옴
    @Post()
    create(@Body() movieData){
        console.log(movieData);
        return movieData;
    }

    @Delete("/:id")
    remove(@Param('id') movieId:string){
        return `This will delete a movie with the id: ${movieId}`;
    }
    //update
    @Patch("/:id")
    path(@Param('id') movieId:string,@Body() updateData){
        return {
            updatedMovie:movieId,
            ...updateData
        }
    }

    
}
