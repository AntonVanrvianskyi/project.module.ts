import React from 'react';
import Movies from "../components/movies/Movies";
import {Outlet} from "react-router-dom";
import {useAppLocation} from "../hooks";
import {IMovie} from "../interfaces";

const MoviesPage = () => {

    const {state} = useAppLocation<IMovie>()
    return (
        <div>
            {
                state?<Outlet/>:<Movies/>
            }


        </div>
    );
};

export default MoviesPage;