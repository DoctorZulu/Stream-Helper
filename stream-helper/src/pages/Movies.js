import React from 'react';
import NavigationBar from '../components/Navbar/NavigationBar'
import MovieCard from '../components/MovieCard/MovieCard'
import HeroBanner from '../components/HeroBanner/HeroBanner'
function Movies() {
    /* Hero banner content */
    const heroTitle = "Find Your Next Movie"
    const heroText = "Click On The Thumbs Down If You Dislike That Recommendation"

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
        description
        category
        createdAt
        author {
          id
          firstname
          lastname
          username
        }
      }
    }
  `;


    return(
        <>
        <NavigationBar />
        <HeroBanner heroText = {heroText} heroTitle = {heroTitle}/>
        <div className="movieCardContainer">
            {/* TODO: map out moviecards */}
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        </div>
        </>
    )
}

export default Movies