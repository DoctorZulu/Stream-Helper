import React, { useState, useEffect } from "react";
import NavigationBar from "../components/Navbar/NavigationBar";
import HeroBanner from "../components/HeroBanner/HeroBanner";

/* vendor imports */
import { useQuery } from "@apollo/client";
import Infinite from "../components/Infinite/Infinite";

import { ALLMOVIES, LASTMOVIE } from "../graphql/operations";

function Homepage() {
  const heroTitle = "Welcome To StreamHelper";
  const heroText =
    "Discover Countless New Movies Save Them To Your List Discard Ones You've Already Seen";

  /* base states */
  const [allMovies, setAllMovies] = useState([]);
  const [take] = useState(5);
  const [end, setEnd] = useState(1);
  const [skip, setSkip] = useState(0);


  console.log()
  const scrollData = {
    allMoviesTake: take,
    allMoviesSkip: skip,
    allMoviesMyCursor: end,
  };

  const { loading: loadingAll, data: dataAll, fetchMore } = useQuery(
    ALLMOVIES,
    {
      variables: {
        ...scrollData,
      },
    }
  );
  console.log(scrollData);

  // const { data: dataLastMovie, loading: loadingLastMovie } = useQuery(
  //   LASTMOVIE,
  // );

  // useEffect(() => {
  //   if (loadingLastMovie === false && dataLastMovie) {
  //     console.log(dataLastMovie, "================================");
  //     setEnd(Number(dataLastMovie.lastMovie.categoryId));
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [loadingLastMovie, dataLastMovie]);

  useEffect(() => {
    if (loadingAll === false && dataAll) {
      console.log(dataAll, "DATA");
      setAllMovies(dataAll.allMovies);
      // console.log("movies set");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingAll, dataAll]);

  const bigFetch = () => {
    fetchMore(
      {
        variables: {
          allMoviesMyCursor: allMovies.length - 1 /* end + take */,
        },
      },
      setEnd(allMovies[allMovies.length - 1].categoryId),
      setSkip(2)
    );
  };
  console.log(end, "this is the end");

  return (
    <>
      <NavigationBar />
      <HeroBanner heroText={heroText} heroTitle={heroTitle} />
      <>
        {/* <button onClick={bigFetch}>FetchMore </button> */}
        {allMovies.length > 0 ? (
          <Infinite allMovies={allMovies} onLoadMore={bigFetch} />
        ) : (
          <h1> There are No Movies To Load </h1>
        )}
      </>
    </>
  );
}

export default Homepage;
