import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreAction} from "../../redux";
import Genre from "./genre/Genre";

const Genres = () => {

   const dispatch = useAppDispatch()
    const {genres} = useAppSelector(state => state.genreReducer)
    useEffect(()=>{
        dispatch(genreAction.getAll())
    },[])

    return (
        <ul className='dropdown'>
            {
                genres.map(genre=><Genre key={genre.id} genre={genre}/>)
            }
        </ul>
    );
};

export default Genres;