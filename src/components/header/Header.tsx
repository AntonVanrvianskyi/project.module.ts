import React, {FC} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import './Header.css'

import Genres from "../genres/Genres";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Switch} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useAppDispatch, useAppSelector} from "../../hooks";

import {SubmitHandler, useForm} from "react-hook-form";
import {ISearch} from "../../interfaces";
import {movieAction} from "../../redux";


const Header:FC = () => {

    const {register,handleSubmit,reset} = useForm<ISearch>()

    const dispatch = useAppDispatch()
    const {query,CurrPage} = useAppSelector(state => state.movieReducer)

    const navigate = useNavigate()
    const setParam:SubmitHandler<ISearch> = ({name}) => {

        dispatch(movieAction.setQuery(name))
        navigate(`?query=${name}&page=${CurrPage}`)
        reset()

    }

    return (
        <div className='container'>
            <ul className='head-ul'>
                <li><NavLink className='a'  to={'hub'}>Show Hub</NavLink></li>

                <li className='dropdown-container'>
                    <NavLink className='a'  to={'movie'}>
                        Movies
                        <ExpandMoreIcon className='chevron' />
                    </NavLink>
                  <Genres/>
                </li>
            </ul>
            <div>
                <form className='search-form' onSubmit={handleSubmit(setParam)}>
                <input className='search-form_txt' type='text' placeholder={'Search...'} {...register('name')}/>
                <button className='search-form_btn'><SearchIcon className='search-form_image'/></button>
                </form>
            </div>
            <div className='admin-container'>

                <Switch color='secondary' name="checkedA" />
                <div className='admin'>A</div>
            </div>


        </div>
    );
};

export default Header;