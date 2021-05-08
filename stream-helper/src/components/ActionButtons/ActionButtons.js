import React from "react";
import { Button } from "react-bootstrap";
import {
  Bookmark,
  HandThumbsUp,
  HandThumbsDown,
  Check2,
} from "react-bootstrap-icons";
import "../../styles/ActionButtonDetail.css";
import { useMutation } from "@apollo/client";
import { USERUPDATE } from "../../graphql/operations";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function ActionButtons(props) {
  const [update, { loading, error }] = useMutation(USERUPDATE);

  const submitLike = async (e) => {
    e.preventDefault();
    await update({
      variables: {
        addMovieToUserMovieId: props.currentMovieDetails.movie.id,
        addMovieToUserLiked: true,
      },
    });
  };

  const submitDislike = async (e) => {
    e.preventDefault();
    await update({
      variables: {
        addMovieToUserMovieId: props.currentMovieDetails.movie.id,
        addMovieToUserDisliked: true,
      },
    });
  };

  const submitSave = async () => {
    await update({
      variables: {
        addMovieToUserMovieId: props.currentMovieDetails.movie.id,
        addMovieToUserSaved: true,
      },
    });
  };

  /*   const removeSaved = async () => {
    await update({
      variables: {
        addMovieToUserMovieId: props.currentMovieDetails.movie.id,
        addMovieToUserSaved: false,
      },
    });
  }; */

  /*  const removeWatched = async () => {
    await update({
      variables: {
        addMovieToUserMovieId: props.currentMovieDetails.movie.id,
        addMovieToUserWatched: false,
      },
    });
  }; */

  const submitWatched = async (e) => {
    e.preventDefault();
    await update({
      variables: {
        addMovieToUserMovieId: props.currentMovieDetails.movie.id,
        addMovieToUserWatched: true,
      },
    });
  };

  return (
    <>
      <div className="actionButtonContainer">
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.25 }}
          style={{ background: "none", border: "none" }}
        >
          <Button
            className="actionButtonBox"
            onClick={() => {
              submitSave();

              console.log("clicked save");
              toast.warning("🎥 Movie Saved!", {
                className: "movieSaved",
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
              });
            }}
          >
            {" "}
            <Bookmark
              color={"white"}
              size={25}
              className="movieDetailHeartIcon"
            />{" "}
            Save
          </Button>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.25 }}
          style={{ background: "none", border: "none" }}
        >
          <Button
            className="actionButtonBox"
            onClick={(e) => {
              submitWatched(e);

              console.log("clicked watched");
              toast.warning("	👍 Added to Watched", {
                className: "movieSaved",
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
              });
            }}
          >
            {" "}
            <Check2
              color={"white"}
              size={25}
              className="movieDetailHeartIcon"
            />{" "}
            Seen
          </Button>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.25 }}
          style={{ background: "none", border: "none" }}
        >
          <Button
            className="actionButtonBox"
            onClick={(e) => {
              submitLike(e);
              console.log("clicked like");
              toast.warning("	👍 Liked Movie", {
                className: "movieSaved",
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
              });
            }}
          >
            {" "}
            <HandThumbsUp
              color={"white"}
              size={25}
              className="movieDetailHeartIcon"
            />{" "}
            Like
          </Button>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.25 }}
          style={{ background: "none", border: "none" }}
        >
          <Button
            className="actionButtonBox"
            onClick={(e) => {
              submitDislike(e);
              console.log("clicked discard");
              toast.warning("	👎 Disliked Movie", {
                className: "movieSaved",
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
              });
            }}
          >
            {" "}
            <HandThumbsDown
              color={"white"}
              size={25}
              className="movieDetailHeartIcon"
            />{" "}
            Dislike
          </Button>
        </motion.button>
      </div>
    </>
  );
}

export default ActionButtons;
