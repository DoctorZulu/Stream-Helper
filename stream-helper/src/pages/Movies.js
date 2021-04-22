import React, { useState, useEffect } from "react";
import { userState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
/* components */
import NavigationBar from "../components/Navbar/NavigationBar";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import moviesHeroImage from "../media/moviesHeroImage.jpg";
// import MovieCard from "../components/MovieCard/MovieCard";
import CheckUser from "../hooks/checkUser";
/* gql */
import { useQuery } from "@apollo/client";
import { USERMOVIERECOMMENDATIONS } from "../graphql/operations";
/* vendor imports */
import InfiniteRecommendations from "../components/Infinite/InfiniteRecommendations";

function Movies({ history }) {
  const [user] = useRecoilState(userState);
  /* Hero banner content */
  const heroTitle = "Find Your Next Movie";
  const heroText =
    "Click On The Thumbs Down If You Dislike That Recommendation";
  const mainImage = { moviesHeroImage };
  const [userMovieRecommendations, setUserMovieRecommendations] = useState();
  /* base states */
  const [take] = useState(10);
  const [cursor, setCursor] = useState(1);
  const [skip, setSkip] = useState(0);

  // const { loading, error, data } = useQuery(LASTMOVIE);

  const { loading: loadingAll, data: dataAll, fetchMore } = useQuery(
    USERMOVIERECOMMENDATIONS,
    {
      variables: {
        userMovieRecommendationsTake: take,
        userMovieRecommendationsSkip: skip,
        userMovieRecommendationsMyCursor: cursor,
      },
    },
  );

  useEffect(() => {
    if (loadingAll === false && dataAll) {
      console.log(dataAll.userMovieRecommendations, "DATA");
      setUserMovieRecommendations(dataAll.userMovieRecommendations);
    }
    if (userMovieRecommendations) {
      setCursor(
        userMovieRecommendations[userMovieRecommendations.length - 1]
          .categoryId,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingAll, dataAll]);

  // useEffect(() => {
  //   if (!loading && data) {
  //     // console.log(data.lastMovie.id);
  //     setEnd(data.lastMovie.id);
  //   }
  // });

  const bigFetch = () => {
    fetchMore(
      {
        variables: {
          userMovieRecommendationsMyCursor: userMovieRecommendations.length,
        },
      },
      setCursor(
        userMovieRecommendations[userMovieRecommendations.length - 1]
          .categoryId,
      ),
      // setSkip(userMovieRecommendations[userMovieRecommendations.length - 1]),
    );
  };
  console.log(cursor, "this is the end");

  return (
    <>
      <NavigationBar />
      <CheckUser history={history} />
      <HeroBanner
        heroText={heroText}
        heroTitle={heroTitle}
        mainImage={mainImage}
        history={history}
      />
      {user ? (
        <>
          {userMovieRecommendations ? (
            <InfiniteRecommendations
              userMovieRecommendations={userMovieRecommendations}
              onLoadMore={bigFetch}
            />
          ) : (
            <h1> There are No Movies To Load </h1>
          )}{" "}
        </>
      ) : null}
    </>
  );
}

export default Movies;
