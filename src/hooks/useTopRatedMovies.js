import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utills/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utills/moviesSlice";

const useTopRatedMovies=()=>{
    
  const dispatch= useDispatch();
  const getTopRatedMovies= async () => {
    const movies=await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",API_OPTIONS);
    const json= await movies.json();
    console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(()=> {getTopRatedMovies();},[]); //calling api call to make only once
}

export default useTopRatedMovies;