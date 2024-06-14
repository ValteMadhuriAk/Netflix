import { useEffect } from "react";
import { addPopularMovies } from "../utills/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utills/constants";

const usePopularMovies =()=>
{
    const dispatch = useDispatch();
    const getPopularMovies = async()=>{
    const popularMovies = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
    const data = await popularMovies.json();
    console.log(data.results);
    dispatch(addPopularMovies(data.results));    
}

useEffect(()=>{getPopularMovies();},[]);

}

export default usePopularMovies;