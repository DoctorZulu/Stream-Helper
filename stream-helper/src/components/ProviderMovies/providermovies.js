import React, { useState, useEffect } from "react";

/* gql */
import { useQuery,  NetworkStatus  } from "@apollo/client";
import {
  USERMOVIERECOMMENDATIONS,
  PROVIDERMOVIEQUERY,
} from "../../graphql/operations.js";
/* vendor imports */
import InfiniteRecommendations from "../Infinite/InfiniteRecommendations";

const ProviderMovies = ({ providerprop, changedPage }) => {
  const [userMovieRecommendations, setUserMovieRecommendations] = useState();
  /* base states */
  const [take] = useState(10);
  const [cursor, setCursor] = useState(1);
  const [skip, setSkip] = useState(0);
  const [ isChangedPage, setIsChangedPage] = useState(changedPage);

  const { loading: loadingAll, data: dataAll, error, fetchMore, refetch, networkStatus } = useQuery(
    PROVIDERMOVIEQUERY,
    {
        variables: {
        providerMovieQueryTake: take,
        providerMovieQuerySkip: skip,
        providerMovieQueryMyCursor: cursor,
        providerMovieQueryProviderId: providerprop,
      },
    }
  );

  console.log(cursor, "CURRENT CURSOR")
  console.log(JSON.stringify(error, null, 2), "PARSED JSON ERR");

  useEffect(() => {
    if (dataAll) {
      console.log(dataAll, "======= data all")
      setUserMovieRecommendations(dataAll.providerMovieQuery);
    }

    if (userMovieRecommendations) {
      setCursor(
        userMovieRecommendations[userMovieRecommendations.length - 1].categoryId
        );
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadingAll, dataAll]);


    useEffect(()=> {
      if(isChangedPage === true ){
        console.log("HIT")

        setCursor(1);
      }     
      refetch();
    }, [providerprop])
    
    if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
    if (loadingAll) return null;
    if (error) return `Error! ${error}`;

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
  return (
    <>
      {userMovieRecommendations ? (
        <>
        <button onClick={() => refetch()}>Refetch!</button>
        <button onClick={() => setIsChangedPage(false)}> Change Page False</button>
        <button onClick={() => setIsChangedPage(true)}> Change Page True</button>
      
        <InfiniteRecommendations
          userMovieRecommendations={userMovieRecommendations}
          onLoadMore={bigFetch}
        />
    
      </> ): (
        <h1> There are No Movies To Load </h1>
      )}{" "}
    </>
  );
};

export default ProviderMovies;
