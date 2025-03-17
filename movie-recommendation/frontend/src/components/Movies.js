import React, { useState, useEffect } from "react";
import axios from "axios";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/movies/")
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.error("Error fetching movies:", error);
            });
    }, []);

    return (
        <div>
            <h1>Movie List</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title} ({movie.release_year})</h3>
                        <p>Genre: {movie.genre}</p>
                        <p>Rating: {movie.rating}</p>
                        <p>{movie.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Movies;