import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {IError, IMovie, IPaginationMovie} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";
import {IVideo, IVideoObject} from "../../interfaces/video.interface";

interface IState {
    movies: IMovie[],
    prevPage: boolean,
    error: IError,
    videoList:string[]






}

const initialState: IState = {
    movies: [],
    prevPage: false,
    error: null,
    videoList:[]
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
const getVideo = createAsyncThunk<IVideoObject<IVideo[]>, {movieId:number}>(
    'movieSlice/getVideo',
    async ({movieId},{rejectWithValue})=>{
        try {
            const {data} = await movieService.getVideoById(movieId)
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
        changePrevPage: state => {
            state.prevPage = !state.prevPage
        },
        changeNextPage: state => {
            state.prevPage = false
        }

    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled,(state, action) => {
                const {results} = action.payload
                state.movies = results

            })
            .addCase(getVideo.fulfilled,(state, action) => {
                const {results} = action.payload
                state.videoList = results.slice(0,4).map(value => value.key)

            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.error = action.payload
            })
            .addMatcher(isFulfilled(),state => {
                state.error = null
            })

    }
})

const {reducer: movieReducer, actions} = slice;

const movieAction = {
    ...actions,
    getAll,
    getVideo
}

export {
    movieAction,
    movieReducer
}

