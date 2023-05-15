import React, {FC} from 'react';
import {IGenre} from "../../../interfaces";
import {Link} from "react-router-dom";
interface IProps {
    genre:IGenre
}
const Genre:FC<IProps> = ({genre}) => {
    const {name,id} = genre

    return (
        <li className='dropdown-li'>
            <Link className='link' to={`genres/${id}/${name}`}>{name}</Link>
        </li>
    );
};

export default Genre;