import React from 'react'
/* passing down movie id as props */

const MovieTrailer = (props) => (
    <>

<iframe title="Trailer" width="100%" height="500%" src={`https://www.youtube.com/embed/${props.currentMovieDetails.movie.trailers[0]}`}frameBorder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
    </iframe>





</>
)

export default MovieTrailer