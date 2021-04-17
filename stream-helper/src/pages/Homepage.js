import React, { useState, useEffect } from "react";
import NavigationBar from "../components/Navbar/NavigationBar";
import HeroBanner from "../components/HeroBanner/HeroBanner";
/* styling */
import { EyeSlash, HandThumbsDown, HeartFill } from "react-bootstrap-icons";
import "../styles/Homepage.css";
/* vendor imports */
import { useQuery } from "@apollo/client";
import Infinite from "../components/Infinite/Infinite";
import CheckUser from "../hooks/checkUser";

import { ALLMOVIES, LASTMOVIE } from "../graphql/operations";
/* gql */
import { ALLMOVIES } from "../graphql/operations";
/* userState via recoil */
import { userState } from "../recoil/atoms";
import { useRecoilState } from "recoil";

function Homepage() {
  /* user state */
  const [user, setUser] = useRecoilState(userState);

  console.log(user, "Current user");
  const heroTitle = "Welcome To StreamHelper";
  const heroText =
    "Discover Countless New Movies Save Them To Your List Discard Ones You've Already Seen";

  /* base states */
  const [allMovies, setAllMovies] = useState([]);
  const [take] = useState(5);
  const [end, setEnd] = useState(1);
  const [skip, setSkip] = useState(0);

  // console.log();
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
    },
  );
  // console.log(scrollData);

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
      setSkip(2),
    );
  };
  // console.log(end, "this is the end");

  return (
    <>
      <CheckUser />
      <NavigationBar />
      <HeroBanner heroText={heroText} heroTitle={heroTitle} />
      <div className="homepageTutorial">
        <h3>
          {" "}
          <HeartFill color={"red"} /> Adds Movies To Your "Saved Movies".
        </h3>
        <h3>
          {" "}
          <EyeSlash color={"orange"} />
          The Eye Icon Discards Movies as "Watched".
        </h3>
        <h3>
          {" "}
          <HandThumbsDown color={"red"} /> The Thumbs Down Icon Discards Movies
          as Disliked
        </h3>
      </div>
      <h1>
        {/* <button onClick={bigFetch}>FetchMore </button> */}
        {allMovies.length > 0 ? (
          <Infinite allMovies={allMovies} onLoadMore={bigFetch} />
        ) : (
          <h1> There are No Movies To Load </h1>
        )}
      </h1>
    </>
  );
}

export default Homepage;
