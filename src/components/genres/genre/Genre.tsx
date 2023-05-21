import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import {IGenre} from "../../../interfaces";

interface IProps {
    genre:IGenre
}
const Genre:FC<IProps> = ({genre}) => {
    const {name,id} = genre

    return (
        <li className='dropdown-li'>
            <NavLink className='link' to={`genres/${id}/${name}`}>{name}</NavLink>
        </li>
    );
};

export default Genre;