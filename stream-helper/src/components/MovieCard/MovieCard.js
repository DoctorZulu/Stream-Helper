import { Button, Card, Elevation } from "@blueprintjs/core";
import '../../styles/MovieCard.css'
/* img import */
import moviePoster from '../../media/moviePoster.png'
import { useState } from "react";


function MovieCard() {
    const [showToggle, setShowToggle] = useState("none")

    return(
        <>
    {/*     <Card interactive={true} elevation={Elevation.TWO} className="movieCardMain" >
            <h2><a href="#">Movie Title</a></h2>
            <p>Movie Description</p>
            <h5>Main Actors in Movie</h5>
            <h5>Genre</h5>
            <Button className="movieCardIcon bp3-intent-success" icon="tick" text="Save" />
            <Button className="movieCardIcon bp3-intent-warning" icon="eye-on" text="Watched" />
            <Button className="movieCardIcon bp3-intent-danger" icon="thumbs-down" text="Discard" />
        </Card> */}

        <div className="movieCardMain">
            <img src={moviePoster} className="movieImageCard" onMouseEnter={() => setShowToggle("grid")}  />
            <h2><a href="#">Movie Title</a></h2>
            <p>Movie Description</p>
            <h5>Main Actors in Movie</h5>
            <h5>Genre</h5>
            <span className="movieCardButtons"  style={{display: showToggle}} onMouseLeave={() => setShowToggle("none")}> 
            <Button className="movieCardIcon bp3-intent-success" icon="tick" text="Save" />
            <Button className="movieCardIcon bp3-intent-warning" icon="eye-on" text="Watched" />
            <Button className="movieCardIcon bp3-intent-danger" icon="thumbs-down" text="Discard" />
            </span>
        </div>
        </>
    )
}


export default MovieCard