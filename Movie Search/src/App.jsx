import MovieList from "./Components/MovieList";
import SearchBar from "./Components/SearchBar";
import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const API_KEY = "445caee3";
      const response = await fetch (`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}`);
      const data = await response.json();
      setMovies(data.Search)
    }
    if(searchQuery) {
      fetchMovies();
    }    
  }, [searchQuery])
  

  return (
    <>
     <SearchBar onSearch={setSearchQuery} />
     <MovieList movies={movies} />
    </>
  )
}

export default App
