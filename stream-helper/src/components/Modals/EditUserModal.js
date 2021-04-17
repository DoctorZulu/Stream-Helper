import React, {  useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import ProfileEditForm from '../Profile/ProfileEditForm';


function EditUserModal() {
    const [lgShow, setLgShow] = useState(false);
 
    return(
        <>
         <Button style={{ margin: "25px"}} onClick={() => setLgShow(true)}>Edit Profile</Button>
     
     <Modal
       size="lg"
       show={lgShow}
       onHide={() => setLgShow(false)}
       aria-labelledby="example-modal-sizes-title-lg"
     >
       <Modal.Header closeButton>
         <Modal.Title id="example-modal-sizes-title-lg">
           Edit Your Profile &amp; Information
         </Modal.Title>
       </Modal.Header>
       <Modal.Body>

           <ProfileEditForm />
           
       </Modal.Body>
     </Modal>
        </>
    )
}

export default EditUserModal