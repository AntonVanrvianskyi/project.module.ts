import React, {FC} from 'react';
import {IGenre, IMovie} from "../../../interfaces";
import StarRating from "../../star.rating/StarRating";
import {useAppLocation} from "../../../hooks";
import {useNavigate} from "react-router-dom";
interface IProps {
    movie:IMovie
}
const MovieByGenre:FC<IProps> = ({movie}) => {
    const {poster_path,title,vote_average,id} = movie
    const navigate = useNavigate()
    const setRoute = () => {
      navigate(`${id}`,{state:{...movie}} )
    }

    return (
        <div className='movie' onClick={setRoute}>
            <h1 className='title'>{title}</h1>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={'photo'}/>
           <StarRating vote_average={vote_average}/>

        </div>
    );
};

export default MovieByGenre;