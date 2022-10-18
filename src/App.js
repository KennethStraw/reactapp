import { useEffect, useState } from 'react';

import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'
const API_URL = 'https://www.omdbapi.com?apikey=12e90387'

const testData = {
    "Title": "Jurassic Park",
    "Year": "1993",
    "imdbID": "tt0107290",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg"
  }
  
const App = () => {
    const [movies, setMovies] = useState();
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async(title) => {
        console.log(title)
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
    }
    useEffect(() => {
        searchMovies(searchTerm)
    }, []);
    return (
        <div className="app">
            <h1>Movie Search</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value = {searchTerm}
                    onChange={(e) => { 
                        setSearchTerm(e.target.value)
                    }}
                />
                <img
                    src={SearchIcon}
                    alt = "search"
                    onClick={() => {
                        searchMovies(searchTerm)
                    }}
                />
            </div>
            
            {movies?.length > 0
                ? ( 
                    <div className = "containter">
                        {movies.map((movie) => (
                            <MovieCard movie = {movie}/>
                        ))}
                    </div>  
                ): (
                    <div className = "empty">
                        <h2>No movies found</h2>
                    </div>                    
                )

            }

        </div>
    );
}

export default App;