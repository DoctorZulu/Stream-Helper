import React from 'react';
import MovieCard from '../components/MovieCard/MovieCard';
import NavigationBar from '../components/Navbar/NavigationBar';
import HeroBanner from '../components/HeroBanner/HeroBanner';
function Homepage() {
    const heroTitle = "Welcome To StreamHelper"
    const heroText = "Discover Countless New Movies Save Them To Your List Discard Ones You've Already Seen"
    return(
        <>
        <NavigationBar />
        <HeroBanner heroText = {heroText} heroTitle = {heroTitle} />
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

export default Homepage