import React, {FC, useEffect} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {useNavigate} from "react-router-dom";

import './MovieDetails.css'
import {useAppDispatch, useAppLocation, useAppSelector} from "../../hooks";
import {IMovie} from "../../interfaces";
import StarRating from "../star.rating/StarRating";
import {movieAction} from "../../redux";
import {youtubeUrl} from "../../constants/urls";





const MovieDetails:FC = () => {

    const {state} = useAppLocation<IMovie>()
    const {id,title,poster_path,overview,vote_average,release_date,genre_ids} = state

    const navigate = useNavigate()

    const {genres} = useAppSelector(state1 => state1.genreReducer)
    const {videoList,showVideo} = useAppSelector(state => state.movieReducer)
    const dispatch = useAppDispatch()
    const closeVideo = () => {
      dispatch(movieAction.showVideo())
    }

    useEffect(()=>{
        dispatch(movieAction.getVideo({movieId:id}))
    },[dispatch,id])
    const showVideos = ()=>{
        dispatch(movieAction.showVideo())

    }


    return (
        <div className='container-details'>
            <img className='img-details' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={'poster'}/>
            <div className='content-details'>
                <p className='text-p'>Rating:</p>
                <StarRating vote_average={vote_average}/>
                <p className='text-p'>{title}</p>
                <div>
                    <p className='text-p'>Release date: {release_date}</p>
                    <h2 className='h2'>Overview:</h2>
                    <p className='text-p'>
                    {overview}
                    </p>
                    <ul className='list-genre'>
                        {
                            genre_ids.map(genreId =>
                                <li onClick={()=>navigate(`/genres/${genreId}/${genres.find(value => value.id===genreId)?.name}`)} key={genreId} className='li-list-genre'>
                                    {
                                        genres.find(({ id }) => id === genreId)?.name
                                    }
                                </li>
                            )
                        }
                    </ul>
                    <div className='btn-div'><Tooltip title="Play"><button className='btn' onClick={showVideos}><PlayArrowIcon className='icon'/></button></Tooltip></div>
                </div>
            </div>
            {
                showVideo&&
                // eslint-disable-next-line jsx-a11y/iframe-has-title
                <div className='video' ><button onClick={closeVideo} className='close'><CloseIcon/></button> <iframe  width="760" height="515" src={`${youtubeUrl}${videoList[0]}?random=${Math.random()}`} allowFullScreen></iframe></div>
            }
        </div>
    );
};

export default MovieDetails;