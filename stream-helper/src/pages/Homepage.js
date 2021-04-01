import React from 'react';
import MovieCard from '../components/MovieCard/MovieCard';
import NavigationBar from '../components/Navbar/NavigationBar'
function Homepage() {
    return(
        <>
        <NavigationBar />
        <h1> homepage here </h1>
        <MovieCard />
        </>
    )
}

export default Homepage