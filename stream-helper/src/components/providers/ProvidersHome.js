import React, { useEffect, useState, useReducer } from "react";
/* gql */
import { useQuery } from "@apollo/client";
import {
  PROVIDERMOVIEQUERY,
  FILTEREDLENGTH,
} from "../../graphql/operations.js";
import InfiniteRecommendations from "../Infinite/InfiniteRecommendations";
const ACTIONS = {
  ALLPROVIDERSFALSE: "allprovidersfalse",
  ACTIVEPROVIDERSTRUE: "activeproviderstrue",
};

const ProvidersHome = ({ providerid }) => {
  const { netflix, hbomax, hulu, amazonprime, disney } = providerid;

  const [incrementingCursor, setIncrementingCursor] = useState(20);
  const [userMovieRecommendations, setUserMovieRecommendations] = useState();
  /* base states */
  const [take] = useState(20);
  const [cursor, setCursor] = useState(1);
  const [skip] = useState(0);
  const [more, setMore] = useState(false);
  const [variables, setVariables] = useState();
  const [providersid, dispatch] = useReducer(reducer, providerid);

  function reducer(providersid, action) {
    switch (action.type) {
      case ACTIONS.ALLPROVIDERSFALSE:
        return null;
      case ACTIONS.ACTIVEPROVIDERSTRUE:
        return null;
      //   return { ...providerid, id: action.payload.id };
      default:
        return { ...providersid };
    }
  }

  // filteredMovies = dataAll.providerMovieQuery.filter((number) =>
  //   number.watchproviders
  //     ? number.watchproviders[0].providerId === (netflix.active ? 8 : null) ||
  //       number.watchproviders[0].providerId === (hbomax.active ? 384 : null) ||
  //       number.watchproviders[0].providerId === (hulu.active ? 15 : null) ||
  //       number.watchproviders[0].providerId ===
  //         (amazonprime.active ? 9 : null) ||
  //       number.watchproviders[0].providerId === (disney.active ? 337 : null)
  //     : null,
  // );

  const tester =
    netflix.active ||
    hbomax.active ||
    hulu.active ||
    amazonprime.active ||
    disney.active
      ? [
          netflix.active
            ? {
                id: 8,
              }
            : { id: 0 },
          hbomax.active
            ? {
                id: 384,
              }
            : { id: 0 },
          hulu.active
            ? {
                id: 15,
              }
            : { id: 0 },
          amazonprime.active
            ? {
                id: 9,
              }
            : { id: 0 },
          disney.active
            ? {
                id: 337,
              }
            : { id: 0 },
        ]
      : null;
  const {
    error,
    loading: loadingAll,
    data: dataAll,
    fetchMore,
    refetch,
  } = useQuery(PROVIDERMOVIEQUERY, {
    // fetchPolicy: "network-only",
    variables: {
      providerMovieQueryTake: take,
      providerMovieQuerySkip: skip,
      providerMovieQueryMyCursor: parseInt(cursor),
      providerMovieQueryProviderId: tester,
    },
  });

  const { error: errorMore, loading: loadingMore, data: dataMore } = useQuery(
    FILTEREDLENGTH,
    {
      variables: {
        filterLengthProviderId: tester,
      },
    },
  );
  let filteredMovies;
  useEffect(() => {
    console.log("hello");
    if (!loadingAll && dataAll) {
      if (
        !netflix.active &&
        !hbomax.active &&
        !hulu.active &&
        !amazonprime.active &&
        !disney.active
      ) {
        refetch();
        setUserMovieRecommendations(dataAll.providerMovieQuery);
      } else {
        refetch({
          variables: {
            filterLengthProviderId: tester,
          },
        });
        filteredMovies = dataAll.providerMovieQuery.filter((number) =>
          number.watchproviders
            ? number.watchproviders[0].providerId ===
                (netflix.active ? 8 : null) ||
              number.watchproviders[0].providerId ===
                (hbomax.active ? 384 : null) ||
              number.watchproviders[0].providerId ===
                (hulu.active ? 15 : null) ||
              number.watchproviders[0].providerId ===
                (amazonprime.active ? 9 : null) ||
              number.watchproviders[0].providerId ===
                (disney.active ? 337 : null)
            : null,
        );
        setUserMovieRecommendations(filteredMovies);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingAll, dataAll, providerid]);

  useEffect(() => {
    if ((!loadingMore, dataMore)) {
      if (
        userMovieRecommendations &&
        userMovieRecommendations.categoryId /* dataAll.providerMovieQuery && dataAll.providerMovieQuery.categoryId */
      ) {
        setCursor(
          userMovieRecommendations[userMovieRecommendations.length - 1]
            .categoryId,
        );
      }
      if (userMovieRecommendations && dataMore) {
        if (userMovieRecommendations.length < dataMore.filterLength) {
          setMore(true);
        } else {
          setMore(false);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingMore, dataMore]);

  const bigFetch = () => {
    if (userMovieRecommendations) {
      fetchMore(
        {
          variables: {
            providerMovieQueryMyCursor: userMovieRecommendations.length,
          },
        },
        setCursor(
          userMovieRecommendations[userMovieRecommendations.length - 1]
            .categoryId,
        ),
      );
    }
  };
  console.log(more);
  console.log(cursor);
  const Mapper = () => {
    return (
      <InfiniteRecommendations
        userMovieRecommendations={userMovieRecommendations}
        onLoadMore={bigFetch}
        cursorLength={incrementingCursor}
        error={error}
        more={more}
      />
    );
  };

  return <>{userMovieRecommendations ? <Mapper /> : null}</>;
};

export default ProvidersHome;
