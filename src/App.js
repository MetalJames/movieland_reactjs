import React from "react";
import { useState } from "react";
// import { useEffect } from "react";
import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg';


const API_URL = 'https://www.omdbapi.com?apikey=3a87e849';

const movie0 = {
    "Title": "Green Book",
    "Year": "2018",
    "imdbID": "tt6966692",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_SX300.jpg"
}

const movie1 = {
    "Title": "Forrest Gump",
    "Year": "1994",
    "imdbID": "tt0109830",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const movie2 = {
    "Title": "Back to the Future",
    "Year": "1985",
    "imdbID": "tt0088763",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const movie3 = {
    "Title": "The Shawshank Redemption",
    "Year": "1994",
    "imdbID": "tt0111161",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
}

const movie4 = {
    "Title": "The Dark Knight",
    "Year": "2008",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
}

const movie5 = {
    "Title": "12 Angry Men",
    "Year": "1957",
    "imdbID": "tt0050083",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
}

const movie6 = {
    "Title": "The Good, the Bad and the Ugly",
    "Year": "1966",
    "imdbID": "tt0060196",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
}

const movie7 = {
    "Title": "The Matrix",
    "Year": "1999",
    "imdbID": "tt0133093",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
}

const movie8 = {
    "Title": "Alien",
    "Year": "1979",
    "imdbID": "tt0078748",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
}

const movie9 = {
    "Title": "WALL·E",
    "Year": "2008",
    "imdbID": "tt0910970",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([movie0, movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        // console.log(data.Search)
    }

    // useEffect(() => {
        // setMoviesMain([movie1, movie1])
    // }, []);

    return (
        <div className="app">
            <h1 className="logoHome" onClick={() => setMovies([movie0, movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9])}>MovieLand</h1>
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