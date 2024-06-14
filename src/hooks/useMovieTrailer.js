import { API_OPTIONS } from "../utills/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utills/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();

    const getVideoData= async()=>{
        const videoData = await fetch('https://api.themoviedb.org/3/movie/653346/videos?language=en-US', API_OPTIONS)
        const json = await videoData.json();
        const filterData=json.results.filter((video)=>video.type==="Trailer");
        const trailer= filterData[0];
        dispatch(addTrailerVideo(trailer));
    }
    
       useEffect(()=>{getVideoData();},[]);
}

export default useMovieTrailer;