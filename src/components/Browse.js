import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utills/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utills/moviesSlice';
import { json } from 'react-router-dom';

const Browse = () => {
  const dispatch= useDispatch();

  const getNowPlayingMovies= async () => {
    const movies=await fetch("https://api.themoviedb.org/3/movie/now_playing?&page=1",API_OPTIONS);
    const data= await movies.json();
    console.log(data.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(()=> {getNowPlayingMovies();},[]); //calling api call to make only once

  return (
    <div>
      <Header />
    </div>
    
  )
}

export default Browse;