import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utills/constants";
import { addUpcomingMovies } from "../utills/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies= ()=>{
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
    const movies = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",API_OPTIONS);
    const json = await movies.json();
    dispatch(addUpcomingMovies(json.results));
    }

    useEffect(()=>{getUpcomingMovies();},[]);
}

export default useUpcomingMovies;