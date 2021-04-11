import { Icon } from "@blueprintjs/core";
import "../../styles/MovieCard.css";
/* img import */
import moviePoster from "../../media/moviePoster.png";
import { useState } from "react";

function MovieCard(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="movieCardMain">
        <img
          src={moviePoster}
          className="movieImageCard"
          onMouseEnter={() => {
            setIsActive(true);
            console.log("hovered");
          }}
        />
        <h2>
          <a href="#">{props.movie.title}</a>
        </h2>
        <p>{props.movie.description}</p>
        <h5>{props.movie.vote_average}</h5>
        <h5>Genre</h5>

        {isActive === true ? (
          <div className="movieButtonContainer">
            <div
              className="saveMovieButton"
              onClick={() => {
                setIsActive(false);
                console.log("clicked save");
              }}
            >
              <Icon icon="heart" color="red" iconSize={20} />
            </div>
            <div
              className="watchedMovieButton"
              onClick={() => {
                setIsActive(false);
                console.log("clicked watched");
              }}
            >
              <Icon icon="eye-on" color="orange" iconSize={20} />
            </div>
            <div
              className="discardMovieButton"
              onClick={() => {
                setIsActive(false);
                console.log("clicked discard");
              }}
            >
              <Icon icon="thumbs-down" color="orange" iconSize={20} />
            </div>
          </div>
        ) : (
          <> </>
        )}
      </div>
    </>
  );
}

export default MovieCard;
