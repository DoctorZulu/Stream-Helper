import React, { useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import "../../styles/MovieCard.css";

const InfiniteRecommendations = ({ userMovieRecommendations, onLoadMore }) => {


  const Mapper = () => (
    <div className="movieCardContainer">
      {finalList.map((movie, i) => (
        <MovieCard {...movie} key={i + 1} />
      ))}
    </div>
  );

  let uniqueList = [...new Set(userMovieRecommendations)]

  let finalList = [...uniqueList]








  return (
    <>
      {userMovieRecommendations ? (
        <InfiniteScroll
          dataLength={userMovieRecommendations.length}
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
