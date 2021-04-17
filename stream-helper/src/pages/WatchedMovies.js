import React, { useEffect, useState } from "react";
import NavigationBar from "../components/Navbar/NavigationBar";
import MovieCard from "../components/MovieCard/MovieCard";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import { useQuery } from "@apollo/client";

import { WATCHEDMOVIES } from "../graphql/operations";

function WatchedMovies() {
  const [watchedMovies, setWatchedMovies] = useState();
  const heroTitle = "Your Watched Movies List";
  const heroText = "These Movies Won't Show Up in your Recommendations";
  const { loading, error, data } = useQuery(WATCHEDMOVIES, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (!loading && data) {
      setWatchedMovies(data);
    }
  }, [data]);

  const Mapper = () => (
    <>
      {console.log(watchedMovies.watchedMovies)}
      {watchedMovies.watchedMovies.map((movie, i) => (
        <MovieCard {...movie} key={i + 1} />
      ))}
    </>
  );
  return (
    <>
      <NavigationBar />
      <HeroBanner heroTitle={heroTitle} heroText={heroText} />
      <div className="movieCardContainer">
        {error ? <h1>{error}</h1> : null}
        {watchedMovies ? <Mapper /> : <h1> error</h1> }
      </div>
    </>
  );
}

export default WatchedMovies;
