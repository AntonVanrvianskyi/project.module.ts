import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

class GenreService {
     getGenre(){
       return axiosService.get(urls.getGenre)
     }
 }
 export const genreService = new GenreService()