import React from "react";
import { Button, Form } from "react-bootstrap";

const Forum = ({ firstname, lastname, email, username, submit }) => {
  return (
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
        Submit
      </Button>
    </Form>
  );
};

export default Forum;
