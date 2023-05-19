import React, {useEffect} from 'react';

import './Slider.css';
import "./Slider-theme.css";
// @ts-ignore
import Slider from "react-slick";
import './Slider.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieAction} from "../../redux";
import {useNavigate} from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
const SliderComponent = () => {
    const {movies} = useAppSelector(state => state.movieReducer)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(movieAction.getUpcomingMovie({page:1}))

    },[dispatch])
    const navigate= useNavigate()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    const posterUrl = 'https://image.tmdb.org/t/p/w400'

    return (
        <Slider {...settings}>
            {
                movies.filter(value => value.release_date>='2023-05-18').map(value => <div className='block-card' key={value.id} onClick={()=>navigate(`/movie/${value.id}`,{state:{...value}})}>
                    <Tooltip title={'More info'}><img src={`${posterUrl}${value.poster_path}`} alt={'poster'}/></Tooltip></div>)
            }
        </Slider>
    );
};

export default SliderComponent;