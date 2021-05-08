import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import "../../styles/MovieCard.css";
import { motion } from "framer-motion";
import Loader from "../spinner/Spinner";
import { Button } from "react-bootstrap";

const InfiniteRecommendations = ({
  userMovieRecommendations,
  onLoadMore,
  error,
  removeMovies,
  cursorLength,
  more,
}) => {
  const languageFilter = userMovieRecommendations.filter(
    (m) =>
      m.original_language != "hi" &&
      "es" &&
      "pk" &&
      m.title != "Gabriel's Inferno" &&
      m.title != "Gabriel's Inferno Part II" &&
      m.title != "Gabriel's Inferno Part III",
  );

  const Mapper = () => (
    <div className="movieCardContainer">
      {languageFilter.map((movie, i) => (
        <motion.div
          whileHover={{ scale: 1.1, borderRadius: "100%" }}
          whileTap={{ scale: 0.8, borderRadius: "100%" }}
          transition={{ duration: 0.35 }}
        >
          <MovieCard {...movie} key={i + 1} />
        </motion.div>
      ))}
    </div>
  );

  // let uniqueList = [...new Set(userMovieRecommendations)];

  // let finalList = [...uniqueList];

  // console.log(finalList);
  console.log(languageFilter);

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
