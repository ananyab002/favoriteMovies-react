import Modal from "react-modal";

function MovieModal({ isModalOpen, movie, closeModal }) {
  return (
    // <Modal
    //   isOpen={isModalOpen}
    //   onRequestClose={closeModal}
    //   contentLabel={movie.Title}
    //   className="modal"
    //   overlayClassName="modal-overlay"
    //   ariaHideApp={false}
    // >
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="modal-header">
            <img src={movie.Poster} alt={movie.Poster}></img>
            <div className="modal-title">
              <h2>
                {movie.Title} ({movie.Year})
              </h2>
              <p>
                <strong>Genre:</strong>
                {movie.Genre}
              </p>
              <p>
                <strong>Rating:</strong>
                {movie.imdbRating}
              </p>
              <p>
                <strong>Runtime:</strong>
                {movie.Runtime}
              </p>
              <p>
                <strong>Cast:</strong>
                {movie.Actors}
              </p>
              <p>{movie.Plot}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // {/* </Modal> */}
  );
}

export default MovieModal;
