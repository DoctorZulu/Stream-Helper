import { Star, XCircleFill } from "react-bootstrap-icons";
import "../../styles/MovieCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { USERUPDATE } from "../../graphql/operations";
import ActionButtonsMain from "../ActionButtons/ActionButtonsMain";
import { StarFill } from "react-bootstrap-icons";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

toast.configure();

function MovieCard(props) {
  const [update, { loading, error }] = useMutation(USERUPDATE);
  const { ref, inView } = useInView();
  const animation = useAnimation();

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

  useEffect(() => {
    if (inView) {
      animation.start({
        x: "0vw",
        opacity: 1.5,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.3,
        },
      });
    }

    if (!inView) {
      animation.start({
        x: "0vw",
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <>
      <div className="movieCardMain">
        <Link to={`/movie/${props.id}`}>
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${props.image}`}
            className="movieImageCard"
            alt="movie poster image"
          />
        </Link>
        {/*  <h3 className="movieCardTitle">
          <Link to={`/movie/${props.id}`}>{props.title}</Link>
        </h3> */}
        <p>{props.description}</p>
        {/* buttons */}
        {props.saved === true ||
        props.liked === true ||
        props.watched === true ||
        props.disliked === true ? (
          <> </>
        ) : (
          <div className="movieButtonContainer">
            <ActionButtonsMain {...props} />
          </div>
        )}

        {props.vote_average ? (
          <>
            <div className="starRatingsBox">
              <div>
                <h5 className="starRatingsContent">
                  {" "}
                  <StarFill /> {props.vote_average}{" "}
                </h5>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        <div className="movieButtonContainer">
          {props.watched === true || props.saved === true ? (
            <>
              <motion.div
                ref={ref}
                animate={animation}
                initial={{ opacity: 0 }}
                className="xMotion"
              >
                <div
                  className="removeMovieIcon"
                  onClick={() => {
                    removeWatched();
                    removeSaved();

                    toast.warning(
                      "	🎥 Movie No Longer Marked as Watched or Saved",
                      {
                        className: "movieSaved",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                      }
                    );
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.3,
                      borderRadius: "100%",
                    }}
                    whileTap={{ scale: 0.8, borderRadius: "100%" }}
                    transition={{ duration: 0.35 }}
                  >
                    <XCircleFill color="rgb(54, 54, 54, 0.85)" size={32} />
                  </motion.div>
                </div>
              </motion.div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default MovieCard;
