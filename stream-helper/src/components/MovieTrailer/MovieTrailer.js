import React, { useState, useEffect } from "react";
/* passing down movie id as props */

const MovieTrailer = ({ currentMovieDetails }) => {
  const [link, setLink] = useState(
    currentMovieDetails.movie.trailers1.replace(/['"]+/g, "")
  );

  useEffect(() => {
    setLink(currentMovieDetails.movie.trailers1.replace(/['"]+/g, ""));
  }, [currentMovieDetails]);
  return (
    <>
      <iframe
        title="Trailer"
        width="100%"
        height="320px"
        src={`https://www.youtube.com/embed/${link}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default MovieTrailer;
