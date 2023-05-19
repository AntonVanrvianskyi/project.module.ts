import React from 'react';

import HomeComponent from "../components/show.hub/HomeComponent";
import {Navigate,  useSearchParams} from "react-router-dom";
import {useAppSelector} from "../hooks";





const ShowHubPages = () => {

    const [query,] = useSearchParams()
    const queryString = query.get('query')
    const {query:querySearch} = useAppSelector(state => state.movieReducer)

    return (
        <div>
            {
                queryString?<Navigate to={`/movie?query=${querySearch}&page=1`}/>:  <HomeComponent/>
            }
        </div>
    );
};

export default ShowHubPages;