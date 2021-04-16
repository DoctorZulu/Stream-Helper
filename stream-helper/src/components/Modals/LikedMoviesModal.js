import React, { useState, useEffect } from 'react'
import { Modal, Button, Container, Row } from 'react-bootstrap';
/* component imports */
import ProfileMovieCard from "../MovieCard/ProfileMovieCard";
/* GQL */
/* import { useQuery } from "@apollo/client";
import { LIKEDMOVIES } from "../../graphql/operations";
 */
function LikedMoviesModal() {
    const [lgShow, setLgShow] = useState(false);
  /*   const [likedMovies, setLikedMovies] = useState();
    const { loading, error, data } = useQuery(LIKEDMOVIES);
 */
   /*  useEffect(() => {
      if (!loading && data) {
        setLikedMovies(data);
      }
    });
   */
   /*  const Mapper = () => (
      <>
 
        {likedMovies.likedMovies.map((movie, i) => (
            <ProfileMovieCard {...movie} key={i + 1} />
        ))}
     
 
 
      </>
    ); */
    return(
        <>
       <Button style={{ paddingRight: "30px"}} onClick={() => setLgShow(true)}>Liked Movies</Button>
     
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title color={"black"} id="example-modal-sizes-title-lg">
              Movies You've Liked
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <Container>
          <Row>

    {/*     {likedMovies ? <Mapper /> : <h1> error</h1> } */}
          </Row>
        </Container>



        </Modal.Body>
      </Modal>
        </>
    )
}

export default LikedMoviesModal