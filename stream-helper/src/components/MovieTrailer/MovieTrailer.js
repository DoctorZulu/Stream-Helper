import React, { useState } from "react";
/* passing down movie id as props */

const MovieTrailer = ({ currentMovieDetails }) => {
  const [link, setLink] = useState(
    currentMovieDetails.movie.trailers1.replace(/['"]+/g, ""),
  );
  return (
    <>
      {/*  <iframe title="Trailer" width="100%" height="500%" src={`https://www.traileraddict.com/${props.currentMovieDetails.movie.title}/trailer`}frameBorder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>

    </iframe> */}
      <iframe
        title="Trailer"
        width="100%"
        height="500%"
        src={`https://www.youtube.com/embed/${link}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/*  <div class="outer-embed-ta"><iframe width="100%" src={`https://www.traileraddict.com/${props.currentMovieDetails.movie.title}/trailer`} allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no" class="embed-ta"></iframe></div>
       */}
    </>
  );
};

export default MovieTrailer;
