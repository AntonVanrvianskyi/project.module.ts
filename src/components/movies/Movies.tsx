import React, {useEffect} from 'react';

import './Movies.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieAction} from "../../redux";
import Movie from "./movie/Movie";
import {useSearchParams} from "react-router-dom";

import Pagination from "../pagination/Pagination";

const Movies = () => {


    const dispatch = useAppDispatch()
    const {movies} = useAppSelector(state => state.movieReducer)
    const [query,setQuery] = useSearchParams()


    useEffect(()=>{
        setQuery(prev => ({...prev, page:'1'}))
    },[])

    useEffect(() => {
        dispatch(movieAction.getAll({page:+query.get('page')}))
    }, [dispatch,query])


    return (
        <div className='movies-container'>


            <div><Pagination/></div>
            <div className='movies'>
                {
                    movies.map(movie => <Movie key={movie.id} movie={movie}/>)
                }
            </div>
        </div>

    );
};

export default Movies;