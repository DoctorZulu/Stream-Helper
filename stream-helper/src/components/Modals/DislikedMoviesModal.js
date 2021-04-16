import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
function LikedMoviesModal() {
    const [lgShow, setLgShow] = useState(false);
 
    return(
        <>
       <Button  onClick={() => setLgShow(true)}>Disliked Movies</Button>
     
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title color={"black"} id="example-modal-sizes-title-lg">
              Movies You've Disliked
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> show movies here</Modal.Body>
      </Modal>
        </>
    )
}

export default LikedMoviesModal