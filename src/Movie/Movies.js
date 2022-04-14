import React from 'react';
import MovieData from "./MovieData";

function Movies(props) {
    return (
        <>
            {props.movie && props.movie.results.map((movie) =>{
                const movieName = {movie}
                return <MovieData {...movieName} key={movie.id}/>
            }
            )}
        </>
    );
}

export default Movies;