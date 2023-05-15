import React, {FC, useEffect} from 'react';
import {IMovie} from "../../../interfaces";
import './Movie.css'
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieAction} from "../../../redux";
import {useNavigate} from "react-router-dom";
import StarRating from "../../star.rating/StarRating";

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {



    const navigate = useNavigate()


    const {id, title, poster_path, vote_average} = movie

    const setId = ()=>{
        navigate(`${id}`,{state:{...movie}})
    }

    return (
        <div className='movie' onClick={setId}>
            <h1 className='title'>{title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='poster'/>
            <StarRating vote_average={vote_average}/>
        </div>
    );
};

export default Movie;