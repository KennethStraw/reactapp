import { useEffect } from 'react';

import './App.css'
import SearchIcon from './search.svg'
const API_URL = 'https://www.omdbapi.com?apikey=12e90387'

const App = () => {
    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        console.log(data.Search)
    }
    useEffect(() => {
        searchMovies("Jurassic")
    }, []);
    return (
        <h1>Hi</h1>
    );
}

export default App;