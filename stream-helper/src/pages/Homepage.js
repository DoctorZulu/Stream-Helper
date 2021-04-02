import React from 'react';
import MovieCard from '../components/MovieCard/MovieCard';
import NavigationBar from '../components/Navbar/NavigationBar';
import HeroBanner from '../components/HeroBanner/HeroBanner';
function Homepage() {
    return(
        <>
        <NavigationBar />
        <HeroBanner />
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