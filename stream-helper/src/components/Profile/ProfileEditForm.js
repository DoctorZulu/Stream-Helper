import React, { useState } from 'react';
/* styling */
import '../../styles/ProfileEditForm.css';
import { Button, Form } from 'react-bootstrap';



function ProfileEditForm() {


    return(
        <>
        <Form className="editProfileForm">
          <Form.Group controlId="formBasicFirstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="firstName" placeholder="Update First Name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Update Your Email" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Update Your Username" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Update Password" />
            <br/>
            <Form.Control type="password" placeholder="Confirm Updated Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit Changes
          </Button>
        </Form>
        </>
    )
}

export default ProfileEditForm