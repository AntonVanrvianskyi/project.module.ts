import React, {FC} from 'react';
import {Rating} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Tooltip from '@mui/material/Tooltip';
import {useNavigate} from "react-router-dom";

import './MoviePlay.css'
import {IMovie} from "../../../interfaces";


interface IProps {
    movie:IMovie
}
const MoviePlay:FC<IProps> = ({movie}) => {

    const {id, title, poster_path,popularity, vote_average,backdrop_path,release_date} = movie
    const posterUrl = poster_path||backdrop_path
        ? `https://image.tmdb.org/t/p/w500${poster_path||backdrop_path}`
        : 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png'

    const navigate = useNavigate()
    const setQuery = () => {
      navigate(`/movie/${id}`,{state:{...movie}})
    }
    return (
        <div className='movie-play'>
            <img className='poster' src={posterUrl} alt={'poster'}/>

            <div className='movie-info'>
                <h2>{title}</h2>
                <p>Release date: {release_date}</p>
                <p>Popularity: {popularity}</p>
                <p>Rating:</p>
                <Rating name="size-small" defaultValue={vote_average} max={10} size="small"  readOnly/>

                <div className='block-btn'><Tooltip title="Watch the trailer"><button onClick={setQuery} className='btn-play'><PlayArrowIcon/></button></Tooltip></div>
            </div>
        </div>
    );
};

export default MoviePlay;