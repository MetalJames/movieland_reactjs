import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg';


const API_URL = 'https://www.omdbapi.com?apikey=3a87e849';

const movie1 = {
    "Title": "Batman: The Animated Series",
    "Year": "1992–1995",
    "imdbID": "tt0103359",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
}

const movie2 = {
    "Title": "Recon 2022: The Mezzo Incident",
    "Year": "2007",
    "imdbID": "tt0791142",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTY5MDE1NjAwMF5BMl5BanBnXkFtZTcwODE1MDU3MQ@@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([movie1, movie2]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (year) => {
        const response = await fetch(`${API_URL}&s=${year}`);
        const data = await response.json();
        setMovies(data.Search);
        console.log(data.Search)
    }

    // useEffect(() => {
        // setMoviesMain([movie1, movie1])
    // }, []);

    return (
        <div className="app">
            <h1 className="logoHome" onClick={() => setMovies([movie1, movie2])}>MovieLand</h1>
            <div className="search">
                <input 
                    placeholder="Search for Movies" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}/>
            </div>
            {movies?.length > 0
            ? (
                <div className="container">
                    {movies.map((movie, key)=>(
                        <MovieCard movie={movie} key={key}/>
                    ))}
                </div>
                ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
}

export default App;