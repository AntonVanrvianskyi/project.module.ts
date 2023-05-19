import React from 'react';

import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ShowHubPages from "./pages/ShowHubPages";
import MoviesPage from "./pages/MoviesPage";
import GenreMovieListPage from "./pages/GenreMovieListPage";
import MovieDetails from "./components/movie.details/MovieDetails";



function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'hub'}/>}/>
                <Route path={'hub'} element={<ShowHubPages/>}/>
                <Route path={'movie'} element={<MoviesPage/>}>
                    <Route path={':id'} element={<MovieDetails/>}/>
                </Route>
                <Route path={'genres/:genreId/:name'} element={<GenreMovieListPage/>}/>
                </Route>
        </Routes>
);
}

export default App;
