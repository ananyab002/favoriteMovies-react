import React, { useState } from "react";
function FavouriteMovie({
  movie,
  removeMovie,
  openModal,
  listType,
  addFavouritesList,
  removeSearchList,
  checkIfAddedToFav,
}) {
  const [showIcon, setShowIcon] = useState(true);
  const handleRemove = (e) => {
    e.stopPropagation();
    removeMovie(movie);
  };
  const openModalHandler = () => {
    console.log("openInFav", movie);
    openModal(movie);
  };
  const handleAddToFav = (e) => {
    setShowIcon(false);
    e.stopPropagation();
    addFavouritesList(movie);
    if (listType == "search") removeSearchList(movie);
  };

  return (
    <li className="favourite-movie" onClick={openModalHandler}>
      <img src={movie.Poster} alt={movie.Poster} />
      <div className="favourite-movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
      </div>
      {listType == "fav" ? (
        <div
          data-toggle="tooltip"
          data-placement="top"
          title="Remove to Favourites"
        >
          <i
            class="bi bi-heart-fill"
            style={{ color: "red", fontSize: "25px" }}
            onClick={handleRemove}
          ></i>
          {/* <button className="remove-button" onClick={handleRemove}>
            Remove From Favourites
          </button> */}
        </div>
      ) : (
        <div>
          {checkIfAddedToFav && checkIfAddedToFav.length > 0 ? (
            <div
              data-toggle="tooltip"
              data-placement="top"
              title="Remove to Favourites"
            >
              <i
                class="bi bi-heart-fill"
                style={{ color: "red", fontSize: "25px" }}
                onClick={handleRemove}
              ></i>
            </div>
          ) : (
            <div
              data-toggle="tooltip"
              data-placement="top"
              title="Add to Favourites"
            >
              <i
                class="bi bi-heart"
                style={{ color: "red", fontSize: "25px" }}
                onClick={handleAddToFav}
              ></i>
            </div>
          )}

          {/* <button className="remove-button" onClick={handleAddToFav}>
            Add to fav
          </button> */}
        </div>
      )}
    </li>
  );
}
export default FavouriteMovie;
