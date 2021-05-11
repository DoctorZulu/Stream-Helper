import React, { useEffect, useState } from "react";
/* gql */
import { useQuery } from "@apollo/client";
import { USERMOVIERECOMMENDATIONS } from "../../graphql/operations";
import AmazonPrimeMovies from "./AmazonPrimeMovies";
import DisneyPlusMovies from "./DisneyPlusMovies";
import HboMaxMovies from "./HboMaxMovies";
import HuluMovies from "./HuluMovies";
import NetflixMovies from "./NetflixMovies";
/* vendor imports */
import InfiniteRecommendations from "../Infinite/InfiniteRecommendations";

const MainProviders = ({ providerid }) => {
  const [incrementingCursor, setIncrementingCursor] = useState(20);
  const [userMovieRecommendations, setUserMovieRecommendations] = useState();
  /* base states */
  const [take] = useState(20);
  const [cursor, setCursor] = useState(1);
  const [skip] = useState(0);

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
    if (!loadingAll && dataAll) {
      setUserMovieRecommendations(dataAll.userMovieRecommendations);
    }
    if (userMovieRecommendations) {
      setCursor(
        userMovieRecommendations[userMovieRecommendations.length - 1]
          .categoryId,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingAll, dataAll, providerid]);

  const bigFetch = () => {
    fetchMore(
      {
        variables: {
          userMovieRecommendationsMyCursor: incrementingCursor,
        },
      },
      setCursor(
        userMovieRecommendations[userMovieRecommendations.length - 1]
          .categoryId,
      ),
    );
    if (loadingAll === false  ) {
      setIncrementingCursor(incrementingCursor + 20)
      
    }
  };
  const WithoutProviders = () => {
    return (
      <InfiniteRecommendations
        userMovieRecommendations={userMovieRecommendations}
        onLoadMore={bigFetch}
        cursorLength={incrementingCursor}
      />
    );
  };

  // const WithProvider = () => {
  //   return (
  //     <>
  //       {providerid === 8 ? <NetflixMovies providerId={8} /> : null}
  //       {providerid === 9 ? <AmazonPrimeMovies providerId={9} /> : null}
  //       {providerid === 384 ? <HboMaxMovies providerId={384} /> : null}
  //       {providerid === 15 ? <HuluMovies providerId={15} /> : null}
  //       {providerid === 337 ? <DisneyPlusMovies providerId={337} /> : null}
  //     </>
  //   );
  // };

  const Switch = () => {
    if (!providerid) {
      return <WithoutProviders />;
    }
    if (providerid === 8) {
      return <NetflixMovies providerId={8} />;
    }
    if (providerid === 9) {
      return <AmazonPrimeMovies providerId={9} />;
    }
    if (providerid === 384) {
      return <HboMaxMovies providerId={384} />;
    }
    if (providerid === 15) {
      return <HuluMovies providerId={15} />;
    }
    if (providerid === 337) {
      return <DisneyPlusMovies providerId={337} />;
    }
  };

  // const IfProvider = () => {
  //   return <>{!providerid ? <WithoutProviders /> : <WithProvider />}</>;
  // };

  return <>{userMovieRecommendations ? <Switch /> : null}</>;
};

export default MainProviders;
