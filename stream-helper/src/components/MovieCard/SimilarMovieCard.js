import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/SimilarMovieCard.css";

function SimilarMovieCard(props) {
  const [movieTitle, setMovieTitle] = useState();
  const [movieImage, setMovieImage] = useState();

  return (
    <>
      <div className="similarMovieCardLink">
        <Link to={`/movie/${props.similarMovie.id}`}>
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${props.similarMovie.poster_path}`}
            className="similarMovieCard"
            alt="movie poster image"
          />
        </Link>
      </div>
    </>
  );
}

export default SimilarMovieCard;
