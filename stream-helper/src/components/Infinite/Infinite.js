import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import "../../styles/MovieCard.css";
import Loader from "../spinner/Spinner";

const Infinite = ({ allMovies, onLoadMore }) => {
  // this is a filter for dan the great
  const languageFilter = allMovies.filter(
    (m) => m.original_language != "hi" && "es" && "pk",
  );
  console.log(languageFilter);
  const Mapper = () => (
    <div className="movieCardContainer">
      {languageFilter.map((movie, i) => (
        <MovieCard {...movie} key={i + 1} />
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
