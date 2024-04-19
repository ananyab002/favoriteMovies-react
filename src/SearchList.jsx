import React from "react";
import FavouriteMovie from "./FavouriteMovie";

function SearchList(props){
    return (
    <div className="favourites-container">
      <h3>Search Results</h3>
      <ul className="favourites-list">
        {props.searchList.map((movie) => {
          return (
              <FavouriteMovie
                   key={movie.imdbID}
              movie={movie}
              listType={props.listType}
                  addFavouritesList={props.addFavouritesList}
                  removeSearchList={props.removeSearchList}
                   openModal={props.openModal}
            />
          );
        })}
      </ul>
    </div>
    )
}

export default SearchList;