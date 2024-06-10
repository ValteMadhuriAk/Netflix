import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utills/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utills/moviesSlice";

const useNowPlayingMovies=()=>{
    
  const dispatch= useDispatch();
  const getNowPlayingMovies= async () => {
    const movies=await fetch("https://api.themoviedb.org/3/movie/now_playing?&page=1",API_OPTIONS);
    const json= await movies.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(()=> {getNowPlayingMovies();},[]); //calling api call to make only once
}

export default useNowPlayingMovies;