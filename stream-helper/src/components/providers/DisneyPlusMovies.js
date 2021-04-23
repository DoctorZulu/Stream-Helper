import React, { useState, useEffect } from "react";

/* gql */
import { useQuery } from "@apollo/client";
import {
  USERMOVIERECOMMENDATIONS,
  PROVIDERMOVIEQUERY,
} from "../../graphql/operations.js";
/* vendor imports */
import InfiniteRecommendations from "../Infinite/InfiniteRecommendations";


function DisneyPlusMovies({providers}) {
  const [userMovieRecommendations, setUserMovieRecommendations] = useState();
  /* base states */
  const [take] = useState(10);
  const [cursor, setCursor] = useState(15);
  const [skip, setSkip] = useState(0);
  const [provideridprop, setProvideridprop] = useState(337);
  const [counter, setCounter] = useState(0);
  const { error, loading: loadingAll, data: dataAll, fetchMore } = useQuery(
    PROVIDERMOVIEQUERY,
    /* { fetchPolicy: "no-cache" }, */

    {
      variables: {
        providerMovieQueryTake: take,
        providerMovieQuerySkip: skip,
        providerMovieQueryMyCursor: cursor,
        providerMovieQueryProviderId: provideridprop,
      },
    }
  );
  
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

      if (dataAll) {
        setUserMovieRecommendations(dataAll.providerMovieQuery);
      }
      if (userMovieRecommendations) {
        setCursor(
          userMovieRecommendations[userMovieRecommendations.length - 1].categoryId
        );
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadingAll, dataAll, providerprop]);


  const bigFetch = () => {
    fetchMore(
      {
        variables: {
          userMovieRecommendationsMyCursor: userMovieRecommendations.length,
        },
      },
      setCursor(
        userMovieRecommendations[userMovieRecommendations.length - 1].categoryId
      )
      // setSkip(userMovieRecommendations[userMovieRecommendations.length - 1]),
    );
  };
    

    return(
      <>
      {userMovieRecommendations ? (
        <InfiniteRecommendations
          error={error}
          userMovieRecommendations={userMovieRecommendations}
          onLoadMore={bigFetch}
        />
      ) : (
        <h1> There are No Movies To Load </h1>
      )}{" "}
    </>
    )
}

export default DisneyPlusMovies