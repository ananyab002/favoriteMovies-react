import React, { useEffect } from "react";
import { useState } from "react";
import FavouriteMovie from "./FavouriteMovie";
function RecentPopularMovies(props) {
  const [recentMovieList, setRecentMovieList] = useState([]);

  useEffect(() => {
    const movieArr = [
      "Joker",
      "Dune: Part Two",
      "Oppenheimer",
      "Kung Fu Panda 4",
      "Interstellar",
    ];
    let allData = [];
    const recentPopularMovieList = async () => {
      try {
        for (let arr of movieArr) {
          const moviesListAPI =
            "https://www.omdbapi.com/?i=tt3896198&apikey=109aab66" +
            "&t=" +
            arr;
          const response = await fetch(moviesListAPI);
          const data = await response.json();
          allData.push(data);
          console.log("Recentpopulardata", allData);
        }
        setRecentMovieList(allData);
        console.log("Recentpopular", recentMovieList);
      } catch (e) {
        console.log(e);
      }
    };
    recentPopularMovieList();
  }, []);

  return (
    <div className="favourites-container">
      <h3>Recent and Popular</h3>
      <ul className="favourites-list">
        {recentMovieList.map((movie) => {
          let checkIfAddedToFav = props.favouritesList.filter(
            (favMovie) => favMovie.imdbID == movie.imdbID
          );
          console.log(checkIfAddedToFav);
          return (
            <FavouriteMovie
              key={movie.imdbID}
              movie={movie}
              openModal={props.openModal}
              listType={props.listType}
              addFavouritesList={props.addFavouritesList}
              checkIfAddedToFav={checkIfAddedToFav}
              removeMovie={props.removeMovie}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default RecentPopularMovies;
