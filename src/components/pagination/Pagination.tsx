import React, {useEffect} from 'react';

import './Pagination.css'
import {useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieAction} from "../../redux";
import {Pagination as Paginate} from "@mui/material";

const Pagination = () => {


    const {prevPage} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch()

    const [query,setQuery] = useSearchParams()

        useEffect(()=>{
            if(+query.get('page')===1){
                dispatch(movieAction.changePrevPage())
            }
        },[query])
    const prev = () => {
        setQuery(prev => ({...prev, page:+prev.get('page')-1}))

    }

    const next = () => {
      setQuery(prev => ({...prev, page:+prev.get('page')+1}))
        dispatch(movieAction.changeNextPage())

    }
    return (
        <div className='btn'>
            <button disabled={prevPage} onClick={prev}>Prev Page</button>
            <button onClick={next}>Next Page</button>
            {/*<Paginate count={10} page={+query.get('page')}  />*/}

        </div>
    );
};

export default Pagination;