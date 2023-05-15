import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import './Header.css'

import Genres from "../genres/Genres";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header:FC = () => {



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
            <div className='admin-container'>

                <button className='button-mode'>light mode</button>
                <div className='admin'>A</div>
            </div>


        </div>
    );
};

export default Header;