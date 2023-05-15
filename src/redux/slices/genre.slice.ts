import {createAsyncThunk, createSlice, isRejectedWithValue} from "@reduxjs/toolkit";
import {IError, IGenre, IGenres, IMovie, IPaginationMovie} from "../../interfaces";
import {genreService, movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    triggerComponent:boolean,
    genres:IGenre[],
    error:IError,
    movieByGenre:IMovie[]
}
const initialState:IState = {
    triggerComponent:false,
    genres:[],
    error:null,
    movieByGenre:[]
}

const getAll = createAsyncThunk<IGenres<IGenre[]>,void>(
    'genreSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await genreService.getGenre()
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getMovieByGenre = createAsyncThunk<IPaginationMovie<IMovie[]>, {idGenre:number,page:number}>(
    'genreSlice/getMovieByGenre',
    async ({idGenre,page},{rejectWithValue})=>{
        try {
            const {data} = await movieService.getGenreByMovie(idGenre,page)
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const slice = createSlice({
    name:'genreSlice',
    initialState,
    reducers:{
        showGenreComponent:state => {
            state.triggerComponent = !state.triggerComponent
        }
    },
    extraReducers:builder => {
        builder
            .addCase(getAll.fulfilled,(state, action) => {
                const {genres} = action.payload
                state.genres = genres
            })
            .addCase(getMovieByGenre.fulfilled,(state, action) => {
                const {results} = action.payload
                state.movieByGenre = results
            })
            .addMatcher(isRejectedWithValue(),(state, action) =>{
                state.error = action.payload
            } )
    }
})

const {reducer:genreReducer, actions} = slice;

const genreAction = {
    ...actions,
    getAll,
    getMovieByGenre
}

export {
    genreAction,
    genreReducer
}