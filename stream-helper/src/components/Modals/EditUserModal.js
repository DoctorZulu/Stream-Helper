import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { userState } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
/* styling */
import "../../styles/ProfileEditForm.css";
/* GraphQl */
import { useMutation } from "@apollo/client";
import { UPDATEUSERPROFILE } from "../../graphql/operations";

function EditUserModal({ history }) {
  const [lgShow, setLgShow] = useState(false);
  const [user, setUser] = useRecoilState(userState);

  /* EDIT PROFILE USER  */
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();

  const [update, { loading, error, data }] = useMutation(UPDATEUSERPROFILE);

  useEffect(() => {
    if (!loading && data) {
      console.log(data);
      // setUser(data);
      console.log("useeffect setUser");
      history.push("/home");
    }
  }, [loading, data]);

  if (loading) return console.log("Loading update");
  if (error) return console.log(`Error! ${error.message}`);

  const handleOnClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    submitProfileEdit();
    // setInterval(() => {
    setLgShow(false);
    // }, 200);
    setInterval(() => {
      history.push("/home");
    }, 200)
  };

  const submitProfileEdit = async () => {
    console.log("submitProfileEdit");
    await update({
      variables: {
        updateUserFirstname: firstname,
        updateUserLastname: lastname,
        updateUserUsername: username,
        updateUserEmail: email,
      },
    });
  };

  return (
    <>
      <Button style={{ margin: "25px" }} onClick={() => setLgShow(true)}>
        Edit Profile
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
          <Form className="editProfileForm" onSubmit={handleOnClick}>
            <Form.Group controlId="formUpdateFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="firstName"
                placeholder="Update First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formUpdateLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="lastName"
                placeholder="Update Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formUpdateEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Update Your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formUpdateUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                placeholder="Update Your Username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>

            {/* <Form.Group controlId="formUpdatePassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Update Password" />
              <br />
              <Form.Control
                type="password"
                placeholder="Confirm Updated Password"
              />
            </Form.Group> */}

            <Button
              variant="primary"
              type="submit" /* onClick={handleOnClick} */
            >
              Submit Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditUserModal;
