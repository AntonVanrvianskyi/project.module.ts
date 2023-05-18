import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {IError, IMovie, IPaginationMovie } from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";
import {IVideo, IVideoObject} from "../../interfaces";

interface IState {
    movies: IMovie[],
    error: IError,
    videoList: string[],
    CurrPage: number,
    total_pages: number,
    query:string,



}

const initialState: IState = {
    movies: [],
    error: null,
    videoList: [],
    total_pages: 0,
    CurrPage: 1,
    query:''

}

const getAll = createAsyncThunk<IPaginationMovie<IMovie[]>, { page: number }>(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const getVideo = createAsyncThunk<IVideoObject<IVideo[]>, { movieId: number }>(
    'movieSlice/getVideo',
    async ({movieId}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getVideoById(movieId)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const getMovieSearch = createAsyncThunk<IPaginationMovie<IMovie[]>, { query: string, page: number }>(
    'movieSlice/getMovieSearch',
    async ({page,query},{rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovie(query, page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const getUpcomingMovie = createAsyncThunk<IPaginationMovie<IMovie[]>,{page:number}>(
    'movieSlice/getUpcomingMovie',
    async ({page},{rejectWithValue})=>{
        try {
            const {data} = await movieService.getUpcomingMovie(page)
            return data
        }catch (e) {
                const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }

    }
)

const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        changeCurrPage: (state, action) => {
            state.CurrPage = action.payload
        },
        setQuery:(state, action) => {
            state.query = action.payload
        }

    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {page, total_pages, results} = action.payload
                state.CurrPage = page
                state.total_pages = total_pages
                state.movies = results

            })
            .addCase(getVideo.fulfilled, (state, action) => {
                const {results} = action.payload
                state.videoList = results.slice(0, 4).map(value => value.key)
            })
            .addCase(getUpcomingMovie.fulfilled,(state, action) => {
                const {results} = action.payload
                state.movies = results
            })
            .addCase(getMovieSearch.fulfilled, (state, action) => {
                const {results} = action.payload
                state.movies = results

            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.error = action.payload
            })
            .addMatcher(isFulfilled(), state => {
                state.error = null
            })

    }
})

const {reducer: movieReducer, actions} = slice;

const movieAction = {
    ...actions,
    getAll,
    getVideo,
    getMovieSearch,
    getUpcomingMovie
}

export {
    movieAction,
    movieReducer
}

