import { Icon } from "@blueprintjs/core";
import "../../styles/MovieCard.css";
/* img import */

import { useState } from "react";

function MovieCard(props) {
  const [isActive, setIsActive] = useState(false);
  // console.log(props);
  return (
    <>
      <div className="movieCardMain">
        <img
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${props.image}`}
          className="movieImageCard"
          onMouseEnter={() => {
            setIsActive(true);
          }}
        />
        <h2>
          <a href="#">{props.title}</a>
        </h2>
        <p>{props.description || null}</p>
        <h5>{props.vote_average || null}</h5>
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
