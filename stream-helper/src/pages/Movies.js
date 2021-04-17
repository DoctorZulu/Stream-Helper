import React, {useState, useEffect} from "react";
/* components */
import NavigationBar from "../components/Navbar/NavigationBar";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import MovieCard from '../components/MovieCard/MovieCard'
/* gql */
import { useQuery } from "@apollo/client";
import { USERMOVIERECOMMENDATIONS } from "../graphql/operations";


function Movies() {
  /* Hero banner content */
  const heroTitle = "Find Your Next Movie";
  const heroText =
    "Click On The Thumbs Down If You Dislike That Recommendation";
    const [userMovieRecommendations, setUserMovieRecommendations] = useState();
    const { loading, error, data } = useQuery(USERMOVIERECOMMENDATIONS);

    useEffect(() => {
      if (!loading && data) {
        setUserMovieRecommendations(data);
      }
    });
    
    const Mapper = () => (
      <>
        {console.log(userMovieRecommendations.userMovieRecommendations, "TEST")}
        {userMovieRecommendations.userMovieRecommendations.map((movie, i) => (
          <MovieCard {...movie} key={i + 1} />
        ))}
      </>
    );        

    
  return (
    <>
      <NavigationBar />
      <HeroBanner heroText={heroText} heroTitle={heroTitle} />
      <div className="movieCardContainer">
      {allMovies.length > 0 ? (
          <Infinite userMovieRecommendations={userMovieRecommendations} onLoadMore={bigFetch} />
        ) : (
          <h1> There are No Movies To Load </h1>
        )}
  {/*   {userMovieRecommendations ? <Mapper /> : <h1> error</h1> } */}
      </div>
    </>
  );
}

export default Movies;
