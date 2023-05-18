import React, {useEffect} from 'react';
import {Pagination} from "@mui/material";

import './Movies.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieAction} from "../../redux";
import Movie from "./movie/Movie";
import {useNavigate, useSearchParams} from "react-router-dom";

const Movies = () => {


    const dispatch = useAppDispatch()
    const {movies, CurrPage,total_pages} = useAppSelector(state => state.movieReducer)
    const [query,setQuery] = useSearchParams()

    const navigate = useNavigate()

    const queryString = query.get('query')
    useEffect(() => {
        searchMovies()
    }, [CurrPage, queryString])

    const searchMovies = () => {
        if (queryString) {

            dispatch(movieAction.getMovieSearch({query: queryString,page:CurrPage}))
        } else {
            dispatch(movieAction.getAll({page: CurrPage}))
        }
    }
    const setQueryPage = (num: number) => {
        dispatch(movieAction.changeCurrPage(num))
        setQuery(prev => {
            prev.set('page', String(num))
            return prev
        })
    }


    return (
        <div className='movies-container'>
            { queryString?<button className='btn-back' onClick={()=>navigate(`/movie?page=1`)}>Back All Movies</button>:''}
            <div className='movies'>
                {
                    movies.map(movie => <Movie key={movie.id} movie={movie}/>)
                }
            </div>
            <div className='paginate'>
                <Pagination size={"large"} count={total_pages>500?500:total_pages}
                            page={CurrPage}
                            onChange={(_, num) => setQueryPage(num)}
                />
            </div>
        </div>

    );
};

export default Movies;