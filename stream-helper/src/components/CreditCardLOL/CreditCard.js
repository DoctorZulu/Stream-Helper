import React from "react";
import "../../styles/MovieCard.css";

function CreditCard(props) {
  const imdbActorProfile = `https://www.imdb.com/search/name/?name=${props.name}`

  return (
    <>
      <div>
        <a href={`https://www.imdb.com/search/name/?name=${props.name}`} target="_blank"> {props.name} </a>
        <h5>{props.character}</h5>
      </div>
    </>
  );
}

export default CreditCard;
