import React from 'react';
import MovieCard from '../components/MovieCard/MovieCard';
import NavigationBar from '../components/Navbar/NavigationBar'
function Homepage() {
    return(
        <>
        <NavigationBar />
        <h1> homepage here </h1>
        <div className="movieCardContainer">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        </div>
        </>
    )
}

export default Homepage