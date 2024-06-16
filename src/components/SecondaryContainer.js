import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);
  return (
    <div className='bg-black'>
    <div className=' -mt-80 relative z-20'>
      <MovieList title={"Now Playing"}  moviesList={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"}  moviesList={movies.topRatedMovies}/>
      <MovieList title={"Popular"}  moviesList={movies.upcomingMovies}/>
      <MovieList title={"Upcoming"}  moviesList={movies.popularMovies}/></div>
      </div>
  )
}

export default SecondaryContainer;