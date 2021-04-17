import React, {useEffect, useState} from 'react';
import NavigationBar from '../components/Navbar/NavigationBar'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import MovieCard from '../components/MovieCard/MovieCard'
import { useQuery } from "@apollo/client";
import { SAVEDMOVIES } from "../graphql/operations";

function SavedMovies() {
    const heroTitle = "Your Saved Movies"
    const heroText = "You'll Find All Your Hearted Movies Here."
    const [savedMovies, setSavedMovies] = useState();
    const { loading, error, data } = useQuery(SAVEDMOVIES);

    useEffect(() => {
      if (!loading && data) {
        setSavedMovies(data);
      }
    });



  
    const Mapper = () => (
      <>
        {console.log(savedMovies.savedMovies)}
        {savedMovies.savedMovies.map((movie, i) => (
          <MovieCard {...movie} key={i + 1} />
        ))}
      </>
    );


    return(
        <>
        <NavigationBar />
        <HeroBanner heroText = {heroText} heroTitle = {heroTitle} />

        <div className="movieCardContainer">
        {error ? <h1>{error}</h1> : null}
        {savedMovies ? <Mapper /> : <h1> error</h1> }
      </div>

        </>
    )
}

export default SavedMovies