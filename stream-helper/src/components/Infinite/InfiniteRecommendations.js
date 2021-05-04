import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import "../../styles/MovieCard.css";
import Loader from "../spinner/Spinner";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

const InfiniteRecommendations = ({
  userMovieRecommendations,
  onLoadMore,
  error,
  removeMovies,
  cursorLength,
  more,
}) => {
  const Mapper = () => (
    <div className="movieCardContainer">
      {finalList.map((movie, i) => (
        <motion.div
          whileHover={{ scale: 1.1, borderRadius: "100%" }}
          whileTap={{ scale: 0.8, borderRadius: "100%", rotate: -360 }}
          transition={{ duration: 0.35 }}
        >
          <MovieCard {...movie} key={i + 1} />
        </motion.div>
      ))}
    </div>
  );

  /* useEffect(() => {
    return removeMovies;
  }, []); */

  let uniqueList = [...new Set(userMovieRecommendations)];

  let finalList = [...uniqueList];

  return (
    <>
      {userMovieRecommendations ? (
        <InfiniteScroll
          dataLength={cursorLength || userMovieRecommendations.length}
          hasMore={true}
          next={onLoadMore}
          className="scroll"
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>End of list</b>
            </p>
          }
        >
          <Mapper />
        </InfiniteScroll>
      ) : (
        <></>
      )}
    </>
  );
};

export default InfiniteRecommendations;
