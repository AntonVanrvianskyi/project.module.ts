import React, {FC, useEffect} from 'react';

import './MovieDetails.css'
import {useAppDispatch, useAppLocation, useAppSelector} from "../../hooks";
import {IMovie} from "../../interfaces";
import StarRating from "../star.rating/StarRating";
import {movieAction} from "../../redux";
import {youtubeUrl} from "../../constants/urls";

const MovieDetails:FC = () => {

    const {state} = useAppLocation<IMovie>()
    const {id,title,poster_path,overview,vote_average,genre_ids} = state

    const {genres} = useAppSelector(state1 => state1.genreReducer)
    const {videoList} = useAppSelector(state => state.movieReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(movieAction.getVideo({movieId: 713704}))
    }, [dispatch])

    useEffect(()=>{
        dispatch(movieAction.getVideo({movieId:id}))
    },[dispatch,id])


    return (
        <div className='container-details'>
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe width="660" height="415" src={`${youtubeUrl}${videoList[0]}`} allowFullScreen></iframe>
            <div className='content-details'>
                <img className='img-details' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={'poster'}/>
                {title}
                <div>
                    <h3>Overview:</h3>
                    {overview}
                    <ul className='list-genre'>
                        {
                            genre_ids.map(genreId =>
                                <li key={genreId} className='li-list-genre'>
                                    {
                                        genres.find(({ id }) => id === genreId)?.name
                                    }
                                </li>
                            )
                        }
                    </ul>
                    <StarRating vote_average={vote_average}/>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;