import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";

const Infinite = ({ movies, onLoadMore }) => {
  const Mapper = () => (
    <>
      {movies.map((movie, i) => (
        <MovieCard {...movie} key={i + 1} />
      ))}
    </>
  );

  return (
    <>
      <div className="container" style={{ padding: 0 }}>
        <div className="loading">
          {movies ? (
            <InfiniteScroll
              dataLength={movies.length}
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
          <h2>Load More</h2>
        </div>
      </div>
    </>
  );
};

export default Infinite;
