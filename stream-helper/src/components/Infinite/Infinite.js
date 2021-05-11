import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import "../../styles/MovieCard.css";
import Loader from "../spinner/Spinner";
import { motion } from "framer-motion";
import { v1 as uuidv1 } from "uuid";

const Infinite = ({ allMovies, onLoadMore }) => {
  // this is a filter for dan the great
  const languageFilter = allMovies.filter(
    (m) =>
      m.original_language != "hi" &&
      "es" &&
      "pk" &&
      m.title != "Gabriel's Inferno" &&
      m.title != "Gabriel's Inferno Part II" &&
      m.title != "Gabriel's Inferno Part III",
  );
  console.log(languageFilter);
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
  //
  return (
    <>
      {allMovies ? (
        <InfiniteScroll
          dataLength={allMovies.length}
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

export default Infinite;
