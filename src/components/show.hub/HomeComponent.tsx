import React, {useEffect} from 'react';
import './HomeStyle.css'
import SliderComponent from "../slider/SliderComponent";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieAction} from "../../redux";
import Movie from "../movies/movie/Movie";
import MoviePlay from "./movie.play.now/MoviePlay";


const HomeComponent = () => {

        const {moviesPlayNow,showVideo} = useAppSelector(state => state.movieReducer)
        const dispatch = useAppDispatch()
        useEffect(()=>{
            dispatch(movieAction.getMoviesPlayNow({page:2}))
            dispatch(movieAction.showVideo())
        },[dispatch])
    useEffect(()=>{
        dispatch(movieAction.noVideo())
    },[])
    return (
        <div className='head-block'>
            <h1 className='title-upcoming'><span style={{color:'orangered'}}>Upcoming</span> Movie</h1>
            <SliderComponent/>
            <h1 className='title-play'><span style={{color:'orangered'}}>Viewing</span> now</h1>
            <div className='now-watch-movie'>

                {
                    moviesPlayNow.filter(value => value.release_date>='2023-03-30'&&'2023-04-30').map(value =><MoviePlay key={value.id} movie={value}/> )
                }
            </div>
        </div>

    );
};

export default HomeComponent;