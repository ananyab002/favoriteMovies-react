import React from "react";
import FavouriteMovie from "./FavouriteMovie";

function FavouritesList(props) {
  return (
    <div className="favourites-container">
      <h3>My Favourite List</h3>
      {props.favouritesList.length > 0 ? (
        <ul className="favourites-list">
          {props.favouritesList.map((movie) => {
            return (
              <FavouriteMovie
                key={movie.imdbID}
                movie={movie}
                removeMovie={props.removeMovie}
                openModal={props.openModal}
                listType={props.listType}
              />
            );
          })}
        </ul>
      ) : (
        <div> No favourite Movies </div>
      )}
    </div>
  );
}
export default FavouritesList;
