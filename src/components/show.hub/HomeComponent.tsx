import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieAction} from "../../redux";

import './HomeStyle.css'
import Slider from "../slider/Slider";




const HomeComponent = () => {
    const {movies} = useAppSelector(state => state.movieReducer)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(movieAction.getUpcomingMovie({page:1}))

    },[])
    const posterUrl = 'https://image.tmdb.org/t/p/w400'


    return (
        <div>
            {/*{*/}
            {/*    movies.filter(value => value.release_date>='2023-05-22').map(value => <div>{value.title}{value.release_date}</div>)*/}
            {/*}*/}
            <Slider/>
        </div>

    );
};

export default HomeComponent;