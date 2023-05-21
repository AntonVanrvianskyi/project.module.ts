import {IRes} from "../types";
import {IMovie, IPaginationMovie} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IVideo, IVideoObject} from "../interfaces";

class MovieService {
    getAll(page:number):IRes<IPaginationMovie<IMovie[]>>{
        return  axiosService.get(urls.getMovie(page),)
    }
    getGenreByMovie(idGenre:number,page:number):IRes<IPaginationMovie<IMovie[]>>{
        return  axiosService.get(urls.getMovieByGenre(idGenre,page))
    }
    getVideoById(movieId:number):IRes<IVideoObject<IVideo[]>>{
        return axiosService.get(urls.getVideo(movieId))
    }
    searchMovie(query:string,page:number):IRes<IPaginationMovie<IMovie[]>>{
        return axiosService.get(urls.searchMovie(query,page))
    }
    getUpcomingMovie(page:number):IRes<IPaginationMovie<IMovie[]>>{
        return axiosService.get(urls.getUpcomingMovie(page))
    }
    getMoviePlayNow(page:number):IRes<IPaginationMovie<IMovie[]>>{
        return axiosService.get(urls.getPlayNowMovie(page))
    }
}
export const movieService = new MovieService()