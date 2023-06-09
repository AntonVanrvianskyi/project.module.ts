import React, {useEffect} from 'react';

import './HomeStyle.css'
import SliderComponent from "../slider/SliderComponent";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieAction} from "../../redux";
import MoviePlay from "./movie.play.now/MoviePlay";


const HomeComponent = () => {

    const {moviesPlayNow} = useAppSelector(state => state.movieReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(movieAction.getMoviesPlayNow({page: 2}))
        dispatch(movieAction.showVideo())
    }, [dispatch])

    useEffect(() => {
        dispatch(movieAction.noVideo())
    }, [dispatch])
    return (
        <div className='head-block'>
            <h1 className='title-upcoming'><span style={{color: 'orangered'}}>Upcoming</span> Movies</h1>
            <SliderComponent/>
            <h1 className='title-play'><span style={{color: 'orangered'}}>Viewing</span> now</h1>
            <div className='now-watch-movie'>

                {
                    moviesPlayNow.filter(value => value.release_date >= '2023-04-01').map(value => <MoviePlay
                        key={value.id} movie={value}/>)
                }
            </div>
        </div>

    );
};

export default HomeComponent;