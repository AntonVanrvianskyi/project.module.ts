import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Pagination as Paginate} from "@mui/material";

import {genreAction, movieAction} from "../../redux";
import {Navigate, useNavigate, useParams, useSearchParams} from "react-router-dom";
import MovieByGenre from "./movieByGenre/MovieByGenre";
import './movieByGenres.css'


const MovieByGenres = () => {
    const { genreId: id,name } = useParams()
    const {movieByGenre,currPage,totalPage} = useAppSelector(state1 => state1.genreReducer)
    const {query:searchQuery} = useAppSelector(state => state.movieReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

   useEffect(()=>{
       dispatch(genreAction.getMovieByGenre({idGenre:parseInt(id),page:currPage}))
   },[ dispatch, id,currPage ])
    useEffect(()=>{
        dispatch(movieAction.noVideo())
    },[])
    const setQueryPage = (num:number) => {
        dispatch(genreAction.changeCurrPage(num))
        navigate(`?page=${num}`)
    }
    const [query,] = useSearchParams()
    const queryString = query.get('query')

    return (
        <div>

            {
                queryString?<Navigate to={`/movie?query=${searchQuery}&page=1`}/>:
                    <div className='movies-container'>
                        <h1 className='title-h1'>{name}</h1>
                        <div> <Paginate count={totalPage>500?500:totalPage}
                                        page={currPage}
                                        onChange={(_,num)=>setQueryPage(num)}/></div>
                        <div className='movies'>
                            {
                                movieByGenre.map(value =><MovieByGenre movie={value} key={value.id}/>)
                            }
                        </div>
                    </div>
            }

        </div>

    );
};

export default MovieByGenres;