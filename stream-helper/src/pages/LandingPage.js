import React, { useState, useEffect } from "react";
import "../styles/LandingPage.css";
/* vendor imports */
import { useMutation } from "@apollo/client";
import { SIGNUP, LOGIN } from "../graphql/operations";
import { Form, Button } from 'react-bootstrap';
function LandingPage({ history }) {
  const [isNewUser, setIsNewUser] = useState(false);
  /* show info about App if true */
  const [knowMore, setKnowMore] = useState(false);
  const [formShow, setFormShow] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [
    login,
    { loading: loadingL, error: errorL, data: dataL },
  ] = useMutation(LOGIN);
  const [
    signup,
    { loading: loadingS, error: errorS, data: dataS },
  ] = useMutation(SIGNUP);

  useEffect(() => {
    if (!loadingL && dataL) {
      console.log(dataL);
      const { signinUser } = dataL;
      history.push("/home");
    }
  }, [dataL]);

  useEffect(() => {
    if (!loadingS && dataS) {
      console.log(dataS);
    }
  }, [dataL]);

  const submitHandlerLogin = async (e) => {
    e.preventDefault();
    await login({
      variables: {
        signinUserEmail: email,
        signinUserPassword: password,
      },
    });
  };

  const submitHandlerSignup = async (e) => {
    e.preventDefault();
    await signup({
      variables: {
        signupUserSignupInput: {
          email: email,
          username: username,
          password: password,
        },
      },
    });
  };

  if (loadingS) return "Loading...";
  if (errorS) return `Error! ${errorS.message}`;
  if (loadingL) return "Loading...";
  if (errorL) return `Error! ${errorL.message}`;

  return (
    <>
      <div className="landingContentGrid" style={{ color: "black" }}>
        <div className="landingLeftCol">
          <div className="landingLeftText">
            <h1 className="landingTitle">
              {" "}
              A Movie Finder App To Save You Time
            </h1>
            <h3 className="landingSubTitle">
              {" "}
              We'll Recommend You Movies You'd Like <br /> Without Showing You
              Those You've already Seen
            </h3>
          </div>
        </div>
        <div className="landingRightCol">
      
        </div>
      </div>
    </>
  );
}

export default LandingPage;
