import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        topRatedMovies: null,
        upcomingMovies: null,
        popularMovies: null,
    },
    reducers:{
        addTopRatedMovies: (state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addPopularMovies: (state,action)=>{
            state.popularMovies=action.payload;
        },
        addUpcomingMovies: (state,action)=>{
            state.upcomingMovies=action.payload;
        },
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo: (state,action)=>{
            state.trailerVideo=action.payload;
        },
    },
});

export default movieSlice.reducer;
export const { addNowPlayingMovies,addTrailerVideo,addTopRatedMovies,addPopularMovies,addUpcomingMovies} = movieSlice.actions;
