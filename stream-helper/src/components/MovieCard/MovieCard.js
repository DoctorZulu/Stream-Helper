import { Heart, EyeSlash, HandThumbsDownFill  } from 'react-bootstrap-icons';
import "../../styles/MovieCard.css";
import { toast } from "react-toastify";

import { useMutation } from "@apollo/client";
import { USERUPDATE } from "../../graphql/operations";

/* img import */

import { useState } from "react";
import { Link } from "react-router-dom";
toast.configure();

function MovieCard(props) {
  const [isActive, setIsActive] = useState(false);
  /*   const [addMovie, setAddMovie] = useState();
  const [likeMovie, setLikeMovie] = useState();
  const [saveMovie, setSaveMovie] = useState();
  const [watchedMovie, setWatchedMovie] = useState(); */

  const [update, { loading, error }] = useMutation(USERUPDATE);
  const submitDislike = async (e) => {
    e.preventDefault();
    await update({
      variables: {
        addMovieToUserMovieId: props.id,
        addMovieToUserLiked: true,
      },
    });
  };

  const submitSave = async () => {
    await update({
      variables: {
        addMovieToUserMovieId: props.id,
        addMovieToUserSaved: true,
      },
    });
  };

  const submitWatched = async (e) => {
    e.preventDefault();
    await update({
      variables: {
        addMovieToUserMovieId: props.id,
        addMovieToUserWatched: true,
      },
    });
  };
  return (
    <>
      <div className="movieCardMain">
        <Link to={`/movie/${props.id}`}>
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${props.image}`}
            className="movieImageCard"
            onMouseEnter={() => {
              setIsActive(true);
            }}
          />
        </Link>
        <h3 className="movieCardTitle">
          <Link to={`/movie/${props.id}`}>{props.title}</Link>
        </h3>
        <p>{props.description}</p>
        <h5>{props.vote_average}</h5>
        <h5>Genre</h5>

        {isActive === true ? (
          <div className="movieButtonContainer">
            <div
              className="saveMovieButton"
              onClick={() => {
                submitSave();
                setIsActive(false);
                console.log("clicked save");
                toast.warning("	🎥 Movie Saved!", {
                  className: "movieSaved",
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                });
              }}
            >
              <Heart color="red" size={20} />
            </div>
            <div
              className="watchedMovieButton"
              onClick={(e) => {
                submitWatched(e);
                setIsActive(false);
                console.log("clicked watched");
                toast.warning("	👍 Added to Watched", {
                  className: "movieSaved",
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                });
              }}
            >
              <EyeSlash color="orange" size={20} />
            </div>
            <div
              className="discardMovieButton"
              onClick={(e) => {
                setIsActive(false);
                submitDislike(e);
                console.log("clicked discard");
                toast.warning("	👎 Disliked Movie", {
                  className: "movieSaved",
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                });
              }}
            >
              <HandThumbsDownFill color="purple" size={20} />
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
