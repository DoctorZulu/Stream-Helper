import { Icon } from "@blueprintjs/core";
import "../../styles/MovieCard.css";
import { useQuery, useMutation, gql } from "@apollo/client";
import { USERUPDATE } from "../graphql/operations";
/* img import */

import { useState } from "react";

function MovieCard(props) {
  const [isActive, setIsActive] = useState(false);
  const [addMovie, setAddMovie] = useState();
  const [likeMovie, setLikeMovie] = useState();
  const [saveMovie, setSaveMovie] = useState();
  const [watchedMovie, setWatchedMovie] = useState();

  const [update, { loading, error, data }] = useMutation(USERUPDATE);
  const submitLike = async (e) => {
    e.preventDefault();
    await update({
      variables: {
        addMovieToUserMovieId: null,
        addMovieToUserLiked: null,
      },
    });
  };

  const submitSave = async (e) => {
    e.preventDefault();
    await update({
      variables: {
        addMovieToUserMovieId: null,
        addMovieToUserSaved: null,
      },
    });
  };

  const submitWatched = async (e) => {
    e.preventDefault();
    await update({
      variables: {
        addMovieToUserMovieId: null,
        addMovieToUserWatched: null,
      },
    });
  };
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
        <p>{props.description}</p>
        <h5>{props.vote_average}</h5>
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
