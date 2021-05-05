import React, { useEffect, useState } from "react";
import { ToggleButton, Button, ToggleButtonGroup } from "react-bootstrap";
import {
  Bookmark,
  HandThumbsUp,
  HandThumbsDown,
  Check2,
} from "react-bootstrap-icons";
import "../../styles/ActionButtons.css";
import { useQuery, useMutation, gql } from "@apollo/client";
import { USERUPDATE } from "../../graphql/operations";
import Toasty from "../Toaster/toast";
import { ToastContainer, toast } from "react-toastify";

function ActionButtonsMain(props) {
  const [update, { loading, error }] = useMutation(USERUPDATE);
  /* on click change icon colors */
  const [likedActive, setLikedActive] = useState("white");
  const [dislikedActive, setDislikedActive] = useState("white");
  const [savedActive, setSavedActive] = useState("white");
  const [seenActive, setSeenActive] = useState("white");

  const submitLike = async (e) => {
    e.preventDefault();
    await update({
      variables: {
        addMovieToUserMovieId: props.id,
        addMovieToUserLiked: true,
      },
    });
  };

  const submitDislike = async (e) => {
    e.preventDefault();
    await update({
      variables: {
        addMovieToUserMovieId: props.id,
        addMovieToUserDisliked: true,
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

  const removeSaved = async () => {
    await update({
      variables: {
        addMovieToUserMovieId: props.id,
        addMovieToUserSaved: false,
      },
    });
  };

  const removeWatched = async () => {
    await update({
      variables: {
        addMovieToUserMovieId: props.id,
        addMovieToUserWatched: false,
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

  // console.log(props, "==========")

  return (
    <>
      <div className="mainActionButtons">
        <Button
          className="mainActionBox"
          onClick={() => {
            submitSave();
            setSavedActive("green");
            console.log("clicked save");
            toast.warning("🎥 Movie Saved!", {
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
          {" "}
          <Bookmark
            color={savedActive}
            size={15}
            className="movieDetailHeartIcon"
          />{" "}
          Save
        </Button>
        <Button
          className="mainActionBox"
          onClick={(e) => {
            submitWatched(e);
            setSeenActive("green");
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
          <Check2
            color={seenActive}
            size={15}
            className="movieDetailHeartIcon"
          />
          Seen
        </Button>
        <Button
          className="mainActionBox"
          onClick={(e) => {
            submitLike(e);
            setLikedActive("green");
            console.log("clicked like");
            toast.warning("	👍 Liked Movie", {
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
          {" "}
          <HandThumbsUp
            color={likedActive}
            size={15}
            className="movieDetailHeartIcon"
          />{" "}
          Like
        </Button>
        <Button
          className="mainActionBox"
          onClick={(e) => {
            submitDislike(e);
            setDislikedActive("green");
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
          {" "}
          <HandThumbsDown
            color={dislikedActive}
            size={15}
            className="movieDetailHeartIcon"
          />{" "}
          Dislike
        </Button>
      </div>
    </>
  );
}

export default ActionButtonsMain;
