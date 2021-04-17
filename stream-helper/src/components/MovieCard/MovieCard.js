import {  EyeSlash, HandThumbsDown, HeartFill, XCircle, XCircleFill  } from 'react-bootstrap-icons';
import "../../styles/MovieCard.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Toasty from "../Toaster/toast";
import { ToastContainer, toast } from "react-toastify";
import { useQuery, useMutation, gql } from "@apollo/client";
import { USERUPDATE } from "../../graphql/operations";



toast.configure();

function MovieCard(props) {
  const [isActive, setIsActive] = useState(false);
  const [update, { loading, error }] = useMutation(USERUPDATE);

  const removeSaved = async () => {
    await update({
      variables: {
        addMovieToUserMovieId: props.id,
        addMovieToUserSaved: false,
      },
    });
  };

  const removeWatched = async () => {
    await update({
      variables: {
        addMovieToUserMovieId: props.id,
        addMovieToUserWatched: false,
      },
    });
  };


  return (
    <>
      <div className="movieCardMain">
        <Link to={`/movie/${props.id}`}>
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${props.image}`}
            className="movieImageCard"
            onMouseEnter={() => {
              setIsActive(true);
            }}
          />
        </Link>
        <h3 className="movieCardTitle">
          <Link to={`/movie/${props.id}`}>{props.title}</Link>
        </h3>
        <p>{props.description}</p>
        <h5>{props.vote_average}</h5>
        <h5>Genre</h5>

     
        {isActive === true ? (
          <div className="movieButtonContainer">
            {props.watched === true  || props.saved === true ? (
              <>
               <div
               className="removeMovieIcon"
               onClick={() => {
                 removeWatched();
                 removeSaved();
                 setIsActive(false);
                 toast.warning("	🎥 Movie No Longer Marked as Watched or Saved", {
                   className: "movieSaved",
                   position: "top-right",
                   autoClose: 5000,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: false,
                   draggable: true,
                   progress: undefined,
                 });
               }}
             >
              <XCircleFill color="rgb(54, 54, 54, 0.85)" size={32}/>
             </div>
              </>
            ) : <> 
          </>
            
            }
            
       
          
          </div>
        ) : (
          <> </>
        )}
      </div>
    </>
  );
}

export default MovieCard;
