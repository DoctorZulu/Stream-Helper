import React from 'react';

function NetflixMovies({providers}) {
    const [userMovieRecommendations, setUserMovieRecommendations] = useState();
    /* base states */
    const [take] = useState(10);
    const [cursor, setCursor] = useState(1);
    const [skip, setSkip] = useState(0);
  
  
  
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
    

    return(
        <>
        </>
    )
}

export default NetflixMovies