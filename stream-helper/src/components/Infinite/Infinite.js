import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import "../../styles/MovieCard.css";
import Spinner from "../spinner/Spinner";

const Infinite = ({ allMovies, onLoadMore }) => {
  const Mapper = () => (
    <div className="movieCardContainer">
      {allMovies.map((movie, i) => (
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
          loader={<Spinner />}
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
      <h2>Scroll For More</h2>
    </>
  );
};

export default Infinite;
