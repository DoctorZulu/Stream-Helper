import { Button, Card, Elevation } from "@blueprintjs/core";
import '../../styles/MovieCard.css'

function MovieCard() {
    return(
        <>
        <Card interactive={true} elevation={Elevation.TWO} className="movieCardMain">
            <h5><a href="#">Movie Title</a></h5>
            <p>Movie Description</p>
            <p>Main Actors in Movie</p>
            <Button className="movieCardIcon" icon="tick" text="Save" />
            <Button className="movieCardIcon" icon="eye-on" text="Watched It" />
            <Button className="movieCardIcon" icon="thumbs-down" text="Discard" />
        </Card>
        </>
    )
}


export default MovieCard