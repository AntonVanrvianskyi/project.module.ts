import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";

import {genreAction} from "../../redux";
import {useParams, useSearchParams} from "react-router-dom";
import MovieByGenre from "./movieByGenre/MovieByGenre";
import Pagination from "../pagination/Pagination";


const MovieByGenres = () => {
    const { genreId: id,name } = useParams()


    const {movieByGenre} = useAppSelector(state1 => state1.genreReducer)
    const dispatch = useAppDispatch()
    const [query,setQuery] = useSearchParams()

   useEffect(()=>{
       dispatch(genreAction.getMovieByGenre({idGenre:parseInt(id),page:parseInt(query.get('page'))}))
   },[ dispatch, id,query ])


    useEffect(()=>{
        setQuery(prev =>({...prev,page:'1'}))
    },[id])

    return (
        <div className='movies-container'>
                <h1>{name}</h1>
            <div><Pagination/></div>
            <div className='movies'>
            {
                movieByGenre.map(value =><MovieByGenre movie={value} key={value.id}/>)
            }
            </div>
        </div>
    );
};

export default MovieByGenres;