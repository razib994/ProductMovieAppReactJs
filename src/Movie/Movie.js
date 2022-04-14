import React, {useEffect, useState} from 'react';
import MovieSearch from "./MovieSearch";
import Movies from "./Movies";
import Product from "../Product/Product";
import MovieData from "./MovieData";
const url = "https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US&page=1";
function Movie(props) {
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [filterMovie, setFilterMovie] = useState("");

    const fetchData = async (url) =>{
        setIsLoading(true);
        try{
            const response = await fetch(url);
            const data = await response.json();
            setMovie(data);
            setFilterMovie(data)
            setIsLoading(false);
            setError(null);
        }catch(error) {
            setError(error.message);
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchData(url);
    },[]);

    const handleSearch = (searchValue) => {
        let search = searchValue.toLowerCase()
        const newMovies = movie.results && movie.results.filter((movie) => {
            const countryName = movie.original_title.toLowerCase();
            return countryName.startsWith(search);
        });
       console.log(newMovies);

    }

    return (
        <>
           <div className="container-fluid pt-5 pb-5" style={{background:"#031633"}} >
               <div className="container">
               <div className="row pt-2 pb-5">
                   <div className="col-md-3"></div>
                   <div className="col-md-6">
                    <MovieSearch onSearch={handleSearch}/>
                   </div>
                   <div className="col-md-3"></div>
               </div>
               </div>
               <div className="row">
                   {filterMovie && filterMovie.results.map((movie)=>
                       <div className="col-md-2" key={movie.id}>
                           <MovieData  movie={movie}/>
                       </div>

                   )}
               </div>

           </div>
        </>
    );
}

export default Movie;