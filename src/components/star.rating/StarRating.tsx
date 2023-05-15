import React, {FC} from 'react';
import {Rating, Typography} from "@mui/material";
interface IProps {
    vote_average:number
}
const StarRating:FC<IProps> = ({vote_average}) => {
    return (
        <div>
            <Rating name="half-rating-read" defaultValue={vote_average} max={10} precision={0.5} readOnly />
        </div>
    );
};

export default StarRating;