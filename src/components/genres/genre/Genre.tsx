import React, {FC} from 'react';
import {IGenre} from "../../../interfaces";
import {Link, NavLink} from "react-router-dom";
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