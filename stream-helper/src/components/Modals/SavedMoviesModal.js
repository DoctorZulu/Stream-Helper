import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';


function SavedMoviesModal() {
    const [lgShow, setLgShow] = useState(false);
 
    return(
        <>
         <Button style={{ margin: "25px"}} onClick={() => setLgShow(true)}>Saved Movies</Button>
     
     <Modal
       size="lg"
       show={lgShow}
       onHide={() => setLgShow(false)}
       aria-labelledby="example-modal-sizes-title-lg"
     >
       <Modal.Header closeButton>
         <Modal.Title id="example-modal-sizes-title-lg">
           Movies You've Saved 
         </Modal.Title>
       </Modal.Header>
       <Modal.Body>...</Modal.Body>
     </Modal>
        </>
    )
}

export default SavedMoviesModal