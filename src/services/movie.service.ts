import {IRes} from "../types";
import {IMovie, IPaginationMovie} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";
import {IVideo, IVideoObject} from "../interfaces/video.interface";

class MovieService {
    getAll(page:number=1):IRes<IPaginationMovie<IMovie[]>>{
        return  axiosService.get(urls.getMovie,{params:{page:page}})
    }
    getGenreByMovie(idGenre:number,page:number=1):IRes<IPaginationMovie<IMovie[]>>{
        return  axiosService.get(urls.getMovieByGenre(idGenre,page))
    }
    getVideoById(movieId:number):IRes<IVideoObject<IVideo[]>>{
        return axiosService.get(urls.getVideo(movieId))
    }
}
export const movieService = new MovieService()