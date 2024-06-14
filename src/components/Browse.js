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

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
    
  )
}

export default Browse;