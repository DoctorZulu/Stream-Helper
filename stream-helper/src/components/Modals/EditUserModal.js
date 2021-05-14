import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
/* styling */
import "../../styles/ProfileEditForm.css";

function EditUserModal({ firstname, lastname, email, username, submit }) {
  const [lgShow, setLgShow] = useState(false);
  // const [user, setUser] = useRecoilState(userState);

  // /* EDIT PROFILE USER  */
  // const [firstname, setFirstName] = useState();
  // const [lastname, setLastName] = useState();
  // const [username, setUserName] = useState();
  // const [email, setEmail] = useState();

  // const [update, { loading, error, data }] = useMutation(UPDATEUSERPROFILE);

  // useEffect(() => {
  //   if (!loading && data) {
  //     console.log(data);
  //     // setUser(data);
  //     console.log("useeffect setUser");
  //     history.push("/home");
  //   }
  // }, [loading, data]);

  // if (loading) return console.log("Loading update");
  // if (error) return console.log(`Error! ${error.message}`);

  // const handleOnClick = (e) => {
  //   e.preventDefault();
  //   console.log("clicked");
  //   submitProfileEdit();
  //   // setInterval(() => {
  //   setLgShow(false);
  //   // }, 200);
  //   setInterval(() => {
  //     history.push("/home");
  //   }, 200)
  // };

  // const submitProfileEdit = async () => {
  //   console.log("submitProfileEdit");
  //   await update({
  //     variables: {
  //       updateUserFirstname: firstname,
  //       updateUserLastname: lastname,
  //       updateUserUsername: username,
  //       updateUserEmail: email,
  //     },
  //   });
  // };

  return (
    <>
      <Button className="profileButton" onClick={() => setLgShow(true)}>
        Edit
      </Button>
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
          <Form className="editProfileForm" onSubmit={submit}>
            <Form.Group controlId="formUpdateFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="firstName"
                placeholder="Update First Name"
                onChange={firstname}
              />
            </Form.Group>

            <Form.Group controlId="formUpdateLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="lastName"
                placeholder="Update Last Name"
                onChange={lastname}
              />
            </Form.Group>

            <Form.Group controlId="formUpdateEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Update Your email"
                onChange={email}
              />
            </Form.Group>

            <Form.Group controlId="formUpdateUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                placeholder="Update Your Username"
                onChange={username}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditUserModal;
