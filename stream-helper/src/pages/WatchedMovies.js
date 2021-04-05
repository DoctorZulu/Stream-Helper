import React from 'react';
import NavigationBar from '../components/Navbar/NavigationBar'
import MovieCard from '../components/MovieCard/MovieCard'
import HeroBanner from '../components/HeroBanner/HeroBanner';

function WatchedMovies() {
    const heroTitle = "Your Watched Movies List"
    const heroText = "These Movies Won't Show Up in your Recommendations"
    return(
        <>
        <NavigationBar />
        <HeroBanner heroTitle={heroTitle} heroText={heroText}/>
        <div className="movieCardContainer">
            {/* TODO: map out moviecards */}
        <MovieCard />
       
        </div>
        </>
    )
}

export default WatchedMovies