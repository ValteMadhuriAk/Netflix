import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utills/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utills/moviesSlice';
import { json } from 'react-router-dom';
import nowPlayingMovies from '../hooks/useNowPlayingMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {
  useNowPlayingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
    
  )
}

export default Browse;