import React, { useState } from 'react';
/* components */
import NavigationBar from '../components/Navbar/NavigationBar'
import MovieCard from '../components/MovieCard/MovieCard'
import HeroBanner from '../components/HeroBanner/HeroBanner'
/* vendor imports */
import { useQuery, gql } from "@apollo/client";
function Movies() {
    /* Hero banner content */
    const heroTitle = "Find Your Next Movie"
    const heroText = "Click On The Thumbs Down If You Dislike That Recommendation"
    /* base states */
    const [allMovies, setAllMovies] = useState([])
    const [take] = useState(10);
    const [end, setEnd] = useState(54);
    const [skip] = useState(0);


    const ALLMOVIES = gql`
    query Query(
      $allMoviesTake: Int
      $allMoviesSkip: Int
      $allMoviesMyCursor: Int
    ) {
      allMovies(
        take: $allMoviesTake
        skip: $allMoviesSkip
        myCursor: $allMoviesMyCursor
      ) {
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


    return(
        <>
        <NavigationBar />
        <HeroBanner heroText = {heroText} heroTitle = {heroTitle}/>
        <div className="movieCardContainer">
          { allMovies ? 
              <MovieCard {...allMovies}/>
        :
        <h1> There are No Movies To Load </h1>}
       
        </div>
        </>
    )
}

export default Movies