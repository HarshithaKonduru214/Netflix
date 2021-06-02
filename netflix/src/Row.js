import React, { useEffect, useState } from "react";
import axios from './axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from "movie-trailer";


const baseUrl = "https://image.tmdb.org/t/p/original";

function Row( { title, fetchUrl, isLargeRow}) {

    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("");

    useEffect( () => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[ fetchUrl ]);
    console.log(movies)

    const opts = {
        width: "100%",
        height: "390",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if(trailerURL) {
            setTrailerURL("")
        }
        else {
            movieTrailer(movie?.name || "")
                .then(url => {
                    const URLParams = new URLSearchParams(new URL(url).search);
                    setTrailerURL(URLParams.get('v'));
                })
                .catch((error) => console.log(error));
        }
    }

  
        
    return (
        
        <div className="row">
            {trailerURL && <Youtube videoId={trailerURL} opts={opts} />}
            <h2>{ title }</h2>
            <div className="row-posters"> 
                {movies.map(movie => (
                    <img key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row-poster ${isLargeRow && "row-poster-large"}`}
                    src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}  
                    alt={movie.name} />
                ))}
                
            </div>

            
        </div>
    )
}

export default Row;