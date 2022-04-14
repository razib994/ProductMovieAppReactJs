import React from 'react';

function MovieData({movie}) {

    return (
        <>
            <div className="card shadow mb-4 bg-dark" >
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} alt="Card image cap"/>
                <div className="card-body text-center">
                    <h5 className="card-title text-white">{movie.original_title}</h5>
                    <p className="card-text text-white">{movie.release_date}</p>
                </div>
            </div>

        </>
    );
}

export default MovieData;