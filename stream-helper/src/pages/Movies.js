import React from "react";
/* components */
import NavigationBar from "../components/Navbar/NavigationBar";
import HeroBanner from "../components/HeroBanner/HeroBanner";


function Movies() {
  /* Hero banner content */
  const heroTitle = "Find Your Next Movie";
  const heroText =
    "Click On The Thumbs Down If You Dislike That Recommendation";



  return (
    <>
      <NavigationBar />
      <HeroBanner heroText={heroText} heroTitle={heroTitle} />
      <div className="movieCardContainer">
       {/*  {userMovies.length > 1 ? (
          <Infinite userMovies={userMovies} />
        ) : (
          <h1> There are No Movies To Load </h1>
        )} */}
      </div>
    </>
  );
}

export default Movies;
