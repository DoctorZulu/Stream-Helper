import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";

const Infinite = ({ allMovies, onLoadMore }) => {
  const Mapper = () => (
    <>
      {allMovies.map((movie, i) => (
        <MovieCard {...movie} key={i + 1} />
      ))}
    </>
  );

  return (
    <>
      <div className="container" style={{ padding: 0 }}>
        <div className="loading">
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
          <h2>Load More</h2>
        </div>
      </div>
    </>
  );
};

export default Infinite;
