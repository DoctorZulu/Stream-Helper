import React, { useState } from "react";
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
  const [dislikedActive, setDislikedActive] = useState("white");
  const [likedActive, setLikedActive] = useState("white");
  const [savedActive, setSavedActive] = useState("white");
  const [seenActive, setSeenActive] = useState("white");

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
          <div
            className="actionButtonBox"
            onClick={() => {
              submitSave();
              setSavedActive("green");
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
              color={savedActive}
              size={25}
              className="movieDetailHeartIcon"
            />{" "}
             <p style={{color: "white"}}>Save</p>
          </div>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.25 }}
          style={{ background: "none", border: "none" }}
        >
          <div
            className="actionButtonBox"
            onClick={(e) => {
              submitWatched(e);
              setSeenActive("green");
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
              color={seenActive}
              size={25}
              className="movieDetailHeartIcon"
            />{" "}
             <p style={{color: "white"}}>Seen</p>
          </div>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.25 }}
          style={{ background: "none", border: "none" }}
        >
          <div
            className="actionButtonBox"
            onClick={(e) => {
              submitLike(e);
              setLikedActive("green");
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
              color={likedActive}
              size={25}
              className="movieDetailHeartIcon"
            />{" "}
            <p style={{color: "white"}}>Like</p>
          </div>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.25 }}
          style={{ background: "none", border: "none" }}
        >
          <div
            className="actionButtonBox"
            onClick={(e) => {
              submitDislike(e);
              setDislikedActive("green");
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
              color={dislikedActive}
              size={25}
              className="movieDetailHeartIcon"
            />{" "}
             <p style={{color: "white"}}>Dislike</p>
          </div>
        </motion.button>
      </div>
    </>
  );
}

export default ActionButtons;
