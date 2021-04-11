import React, { useState, useEffect }  from 'react';
import NavigationBar from '../components/Navbar/NavigationBar';
import HeroBanner from '../components/HeroBanner/HeroBanner';

/* vendor imports */
import { useQuery, gql } from "@apollo/client";
import Infinite from "../components/Infinite/Infinite";


function Homepage() {
    const heroTitle = "Welcome To StreamHelper"
    const heroText = "Discover Countless New Movies Save Them To Your List Discard Ones You've Already Seen"

     /* base states */
  const [allMovies, setAllMovies] = useState([]);
  const [take] = useState(10);
  const [end, setEnd] = useState(54);
  const [skip] = useState(0);

  const ALLMOVIES = gql`
    query Query {
      allMovies {
        id
        title
        original_language
        release_date
        runetime
        vote_average
        overview
        image
        genres {
          id
          name
        }
      }
    }
  `;

  const { loading, data, fetchMore } = useQuery(ALLMOVIES, {
    variables: {
      allMoviesTake: take,
      allMoviesSkip: skip,
      allMoviesMyCursor: end,
    },
  });

  useEffect(() => {
    if (loading === false && data) {
      console.log(data, "DATA");
      setAllMovies(data.allMovies);
      console.log("movies set");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, data]);



    return(
        <>
        <NavigationBar />
        <HeroBanner heroText = {heroText} heroTitle = {heroTitle} />
        <>
                {allMovies.length > 1 ? (
                <Infinite allMovies={allMovies}/>
                ) : (
                <h1> There are No Movies To Load </h1>
                )}
        </>
        </>
    )
}

export default Homepage