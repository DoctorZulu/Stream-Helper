import React, { useState, useEffect } from "react";
import "../styles/LandingPage.css";
/* vendor imports */
import { useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";
import { SIGNUP, LOGIN } from "../graphql/operations";
import { toast } from "react-toastify";
import { Form, Button, Modal, Carousel } from "react-bootstrap";
import landingImageOne from "../media/landingImageOne.png";
import landingImageTwo from "../media/landingImageTwo.png";
import landingImageThree from "../media/landingImageThree.png";
import Loader from "../components/spinner/Spinner";
import { motion } from "framer-motion";
import movie1 from "../media/movie1.jpg";
import movie2 from "../media/movie2.jpg";
import movie3 from "../media/movie3.jpg";
import movie4 from "../media/movie4.jpg";
import movie5 from "../media/movie5.jpg";
import movie6 from "../media/movie6.jpg";
import movie7 from "../media/movie7.jpg";
import movie8 from "../media/movie8.jpg";
import movie9 from "../media/movie9.jpg";
import movie10 from "../media/movie10.jpg";

function LandingPage({ history }) {
  const [user, setUser] = useRecoilState(userState);

  const [isNewUser, setIsNewUser] = useState(false);
  /* show info about App if true */
  const [knowMore, setKnowMore] = useState(false);
  const [formShow, setFormShow] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  /* learn more modal */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      const { signinUser } = dataL;
      setUser(signinUser);
      localStorage.setItem("uid", `Bearer ${signinUser.token}`);
      history.push("/home");
    }
  }, [dataL]);

  useEffect(() => {
    if (!loadingS && dataS) {
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
    toast.success("	User created", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    setIsNewUser(false);
  };

  if (loadingS) return "Loading...";
  if (errorS) return `Error! ${errorS.message}`;
  if (loadingL)
    return (
      <>
        <Loader />
      </>
    );
  if (errorL) return `Error! ${errorL.message}`;

  return (
    <>
      <div
        className="landingContentGrid"
        style={{ color: "black", background: "whitesmoke" }}
      >
        <div className="landingLeftCol">
          <motion.div
            initial={{ y: "110vh", x: "0vw", opacity: 1 }}
            animate={{ y: "-30vh", x: "0vw", opacity: 1 }}
            transition={{
              stiffness: 110,
              damping: 20,
              delay: 1,
              duration: 8,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 3,
            }}
          >
            <img className="floatingCard" src={movie1} alt="movie card" />
          </motion.div>

          <motion.div
            initial={{ y: "110vh", x: "0vw", opacity: 1 }}
            animate={{ y: "-30vh", x: "0vw", opacity: 1 }}
            transition={{
              stiffness: 110,
              damping: 20,
              delay: 8,
              duration: 8,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 3,
            }}
          >
            <img className="floatingCard" src={movie7} alt="movie card" />
          </motion.div>
          <motion.div
            initial={{ y: "110vh", x: "10vw", opacity: 1 }}
            animate={{ y: "-30vh", x: "10vw", opacity: 1 }}
            transition={{
              stiffness: 110,
              damping: 20,
              delay: 3,
              duration: 9,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 5,
            }}
          >
            <img className="floatingCard" src={movie2} alt="movie card" />
          </motion.div>
          <motion.div
            initial={{ y: "110vh", x: "20vw", opacity: 1 }}
            animate={{ y: "-30vh", x: "20vw", opacity: 1 }}
            transition={{
              stiffness: 110,
              damping: 20,
              delay: 4.5,
              duration: 8,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2,
            }}
          >
            <img className="floatingCard" src={movie3} alt="movie card" />
          </motion.div>
          <motion.div
            initial={{ y: "110vh", x: "20vw", opacity: 1 }}
            animate={{ y: "-30vh", x: "20vw", opacity: 1 }}
            transition={{
              stiffness: 110,
              damping: 20,
              delay: 9.5,
              duration: 12,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2,
            }}
          >
            <img className="floatingCard" src={movie8} alt="movie card" />
          </motion.div>
          <motion.div
            initial={{ y: "110vh", x: "30vw", opacity: 1 }}
            animate={{ y: "-30vh", x: "30vw", opacity: 1 }}
            transition={{
              stiffness: 110,
              damping: 20,
              delay: 7,
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 3,
            }}
          >
            <img className="floatingCard" src={movie4} alt="movie card" />
          </motion.div>
          <motion.div
            initial={{ y: "110vh", x: "40vw", opacity: 1 }}
            animate={{ y: "-30vh", x: "40vw", opacity: 1 }}
            transition={{
              stiffness: 110,
              damping: 20,
              delay: 9,
              duration: 8,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 4,
            }}
          >
            <img className="floatingCard" src={movie5} alt="movie card" />
          </motion.div>
          <motion.div
            initial={{ y: "110vh", x: "50vw", opacity: 1 }}
            animate={{ y: "-30vh", x: "50vw", opacity: 1 }}
            transition={{
              stiffness: 110,
              damping: 20,
              delay: 11,
              duration: 9,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 5,
            }}
          >
            <img className="floatingCard" src={movie6} alt="movie card" />
          </motion.div>
          <motion.div
            initial={{ y: "110vh", x: "50vw", opacity: 1 }}
            animate={{ y: "-30vh", x: "50vw", opacity: 1 }}
            transition={{
              stiffness: 110,
              damping: 20,
              delay: 18,
              duration: 14,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 5,
            }}
          >
            <img className="floatingCard" src={movie9} alt="movie card" />
          </motion.div>
          <motion.div
            initial={{ y: "110vh", x: "55vw", opacity: 1 }}
            animate={{ y: "-30vh", x: "55vw", opacity: 1 }}
            transition={{
              stiffness: 110,
              damping: 20,
              delay: 24,
              duration: 13,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 5,
            }}
          >
            <img className="floatingCard" src={movie10} alt="movie card" />
          </motion.div>

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
            <div className="landingButtonsContainer">
              <Button
                className="landingPageButton"
                onClick={() => {
                  setIsNewUser(true);
                  setFormShow(false);
                }}
              >
                {" "}
                Register{" "}
              </Button>
              <Button
                className="landingPageButton"
                onClick={() => {
                  setIsNewUser(false);
                  setFormShow(false);
                }}
              >
                {" "}
                Already A Member?{" "}
              </Button>
              <Button
                className="landingPageButton"
                onClick={() => {
                  setShow(true);
                  setFormShow(true);
                }}
              >
                {" "}
                Learn More{" "}
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>About Stream Helper</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Carousel>
                    <Carousel.Item className="carouselItemDetails">
                      <img
                        className="d-block w-100"
                        src={landingImageOne}
                        alt="First slide"
                      />
                      <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carouselItemDetails">
                      <img
                        className="d-block w-100"
                        src={landingImageTwo}
                        alt="Second slide"
                      />

                      <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carouselItemDetails">
                      <img
                        className="d-block w-100"
                        src={landingImageThree}
                        alt="Third slide"
                      />

                      <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                    Okay!
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
        <motion.div
          className="landingRightCol"
          layout
          initial={{ y: -1500, opacity: 0.2 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 110,
            damping: 20,
            delay: 1,
          }}
        >
          <div className="landingRightCol">
            {isNewUser === false ? (
              /* if user clicks login -> */
              <div className="landingPageForm">
                <div className="formShowToggle" style={{ display: formShow }}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Button type="submit" onClick={submitHandlerLogin}>
                    {" "}
                    Login{" "}
                  </Button>
                </div>
              </div>
            ) : (
              /* if user clicks register -> */
              <div className="landingPageForm">
                <div className="formShowToggle" style={{ display: formShow }}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="username"
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Button type="submit" onClick={submitHandlerSignup}>
                    {" "}
                    Register{" "}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default LandingPage;
