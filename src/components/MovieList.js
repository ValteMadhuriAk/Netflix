import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,moviesList}) => {
return (
    <div className='p-2'>
    <h1 className=' text-white text-3xl py-6'>{title}</h1>
    <div className='flex overflow-x-scroll'>
    <div className='flex '>
        {moviesList && moviesList.map((movie)=>(<MovieCard key={"movie.id"} postarPath={movie.poster_path} />))}; </div></div></div>
  );
}

export default MovieList