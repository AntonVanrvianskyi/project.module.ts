import React from 'react';

import MovieByGenres from "../components/movie.byGenres/MovieByGenres";
import {Outlet} from "react-router-dom";
import {useAppLocation} from "../hooks";
import {IMovie} from "../interfaces";

const GenreMovieListPage = () => {

    return (
        <div>
            <MovieByGenres/>
            <Outlet/>

        </div>
    );
};

export default GenreMovieListPage;