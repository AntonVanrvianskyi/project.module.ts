import React, {FC} from 'react';
import StarRating from "../../star.rating/StarRating";
import {useNavigate} from "react-router-dom";

import { IMovie } from "../../../interfaces";
interface IProps {
    movie:IMovie
}
const MovieByGenre:FC<IProps> = ({movie}) => {

    const {poster_path,title,vote_average,id,backdrop_path} = movie
    const navigate = useNavigate()
    const setRoute = () => {
      navigate(`/movie/${id}`, {state:{...movie}})
    }
    const posterUrl = poster_path||backdrop_path
        ? `https://image.tmdb.org/t/p/w500${poster_path||backdrop_path}`
        : 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png'

    return (
        <div className='movie' onClick={setRoute}>
            <h1 className='title'>{title}</h1>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={posterUrl} alt={'photo'}/>
           <StarRating vote_average={vote_average}/>

        </div>
    );
};

export default MovieByGenre;