import "./App.css";
import SearchMovie from "./SearchMovie";
import { useState } from "react";
import FavouritesList from "./FavouritesList";
import MovieModal from "./MovieModal";
import "./styles.css";
import RecentPopularMovies from "./RecentPopularMovies";
import SearchList from "./SearchList";

function App() {
  const [favouritesList, setFavouritesList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [searchList, setSearchList] = useState([]);

  const openModal = (movie) => {
    console.log(movie);
    console.log("Open", selectedMovie, isModalOpen);
    setSelectedMovie(movie);
    setIsModalOpen(true);
    console.log("Open", selectedMovie, isModalOpen);
  };
  const closeModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
    console.log("Close", selectedMovie, isModalOpen);
  };
  const addFavouritesList = (movie) => {
    console.log(movie);
    if (!favouritesList.includes(movie))
      setFavouritesList([...favouritesList, movie]);
    else alert("Movie is already added to Favourites");
    console.log("FavList", favouritesList);
  };
  const removeMovie = (removedMovie) => {
    setFavouritesList(
      favouritesList.filter((movie) => movie.imdbID != removedMovie.imdbID)
    );
  };
  const addSearchList = (movie) => {
    setSearchList([...searchList, movie]);
  };

  const removeSearchList = (removedMovie) => {
    setSearchList(
      searchList.filter((movie) => movie.imdbID != removedMovie.imdbID)
    );
  };
  return (
    <div className="App">
      <SearchMovie
        addSearchList={addSearchList}
        favouritesList={favouritesList}
      />
      {searchList.length > 0 && (
        <SearchList
          openModal={openModal}
          addFavouritesList={addFavouritesList}
          removeSearchList={removeSearchList}
          searchList={searchList}
          listType="search"
        />
      )}
      <RecentPopularMovies
        favouritesList={favouritesList}
        openModal={openModal}
        addFavouritesList={addFavouritesList}
        listType="recent"
        removeMovie={removeMovie}
      />
      <FavouritesList
        favouritesList={favouritesList}
        removeMovie={removeMovie}
        openModal={openModal}
        listType="fav"
      />
      {isModalOpen && (
        <MovieModal
          isModalOpen={isModalOpen}
          movie={selectedMovie}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default App;
