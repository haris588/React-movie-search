import React, { useState, useEffect } from "react";
import { MainContainer } from "../containers/main";
import { PaginationContainer } from "../containers/pagination";
import { SearchBarContainer } from "../containers/searchBar";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovies()
  }, [page])

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handlePrevPage = (e) => {
    setPage((prev) => prev - 1);
  };

  const handleNextPage = (e) => {
    setPage((prev) => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    page === 1 ? getMovies() : setPage(1);
  };

  const getMovies = async () => {
    const API_KEY = "dbdba204754c71f5784ccc6cec567b6b";
    
    try {
      if (query) {
        const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
        const promise = await fetch(API_URL);
        const data = await promise.json();
        setMovies(data.results);
      }
      else if (!query) {
        const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
        const promise = await fetch(API_URL);
        const data = await promise.json();
        setMovies(data.results);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <SearchBarContainer handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      <MainContainer movies={movies} query={query}></MainContainer>
      <PaginationContainer handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} page={page} movies={movies}/>
    </>

  );
}
