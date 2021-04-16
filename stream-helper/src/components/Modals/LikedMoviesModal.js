import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
function LikedMoviesModal() {
    const [lgShow, setLgShow] = useState(false);
 
    return(
        <>
       <Button style={{ margin: "25px"}} onClick={() => setLgShow(true)}>Your Liked Movies</Button>
     
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
        <Modal.Body> show movies here</Modal.Body>
      </Modal>
        </>
    )
}

export default LikedMoviesModal