import React from 'react';
import NavigationBar from '../components/Navbar/NavigationBar'
import HeroBanner from '../components/HeroBanner/HeroBanner'

function SavedMovies() {
    const heroTitle = "Your Saved Movies"
    const heroText = "You'll Find All Your Hearted Movies Here."
    return(
        <>
        <NavigationBar />
        <HeroBanner heroText = {heroText} heroTitle = {heroTitle} />

        </>
    )
}

export default SavedMovies