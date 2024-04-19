import React from "react";
import { useState } from "react";
import FavouritesList from "./FavouritesList";

function SearchMovie({ addSearchList, favouritesList }) {
  const [movieTitle, setMovieTitle] = useState("");
  const searchMovie = async (e) => {
    e.preventDefault();
    const searchAPI =
      "https://www.omdbapi.com/?i=tt3896198&apikey=109aab66" +
      "&t=" +
      encodeURI(movieTitle);
    try {
      const response = await fetch(searchAPI);
      const data = await response.json();
      console.log(data, data.imdbID);
      const ifAddedFav = favouritesList.filter(
        (movie) => movie.imdbID == data.imdbID
      );
      console.log(ifAddedFav);
      if (data.Response !== "False") {
        if (ifAddedFav.length > 0) {
          alert("Already added to Favourites");
        } else addSearchList(data);
      } else alert("Please enter the right movie name");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="search-movies">
      <form onSubmit={searchMovie}>
        <input
          type="text"
          name="query"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          placeholder="Enter a movie title"
          role="search"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
export default SearchMovie;
