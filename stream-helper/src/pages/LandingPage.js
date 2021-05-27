import React, { useEffect, useReducer } from "react";
import "../styles/LandingPage.css";
/* vendor imports */
import { useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";
import { SIGNUP, LOGIN } from "../graphql/operations";
import { toast } from "react-toastify";
import { Form, Button, Modal, Carousel, Alert } from "react-bootstrap";
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

const ACTIONS = {
  HANDLECLOSE: "handleClose",
  HANDLEOPEN: "handleOpen",
  SIGNUPBUTTON: "signupButton",
  LOGINBUTTON: "loginButton",
  LEARNMOREBUTTON: "learnMoreButton",
  LOGIN: "login",
  SIGNUP: "signup",
};

const initialState = {
  isNewUser: false,
  knowMore: false,
  formShow: false,
  email: "",
  password: "",
  username: "",
  show: false,
  validated: false,
};
function LandingPage({ history }) {
  const [login, { loading: loadingL, error: errorL, data: dataL }] =
    useMutation(LOGIN);
  const [signup, { loading: loadingS, error: errorS, data: dataS }] =
    useMutation(SIGNUP);
  const [user, setUser] = useRecoilState(userState);
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "field": {
        return { ...state, [action.field]: action.value };
      }
      case ACTIONS.HANDLECLOSE:
        return { ...state, show: false };
      case ACTIONS.HANDLEOPEN:
        // not sure what this is, but it was in code before refactored
        break;
      case ACTIONS.LEARNMOREBUTTON:
        return {
          ...state,
          show: true,
          formShow: true,
        };
      case ACTIONS.SIGNUPBUTTON:
        return { ...state, isNewUser: true, formShow: false };
      case ACTIONS.LOGINBUTTON:
        return {
          ...state,
          isNewUser: false,
          formShow: false,
          show: false,
        };
      case ACTIONS.SIGNUP:
        signup({
          variables: {
            signupUserSignupInput: {
              email: state.email,
              username: state.username,
              password: state.password,
            },
          },
        });
        return { ...state, isNewUser: false };
      case ACTIONS.LOGIN:
        login({
          variables: {
            signinUserEmail: state.email,
            signinUserPassword: state.password,
          },
        });
        return state;
      default:
        return state;
    }
  }

  useEffect(() => {
    if (!loadingL && dataL) {
      const { signinUser } = dataL;
      setUser(signinUser);
      localStorage.setItem("uid", `Bearer ${signinUser.token}`);
      state.validated = true;
      history.push("/home");
    }
  }, [dataL]);

  useEffect(() => {
    if (!loadingS && dataS) {
      return { ...state, validated: true, IsNewUser: false };
    }
  }, [dataL]);

  const submitHandlerLogin = async (e) => {
    // const form = e.currentTarget;
    // if (form.checkValidity() === false) {
    e.preventDefault();
    e.stopPropagation();
    // }
    await dispatch({ type: ACTIONS.LOGIN });
  };

  const submitHandlerSignup = async (e) => {
    // const form = e.currentTarget;
    // if (form.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
    // }
    await dispatch({ type: ACTIONS.SIGNUP });
    toast.success("	User created", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  if (loadingS) return "Loading...";

  if (loadingL)
    return (
      <>
        <Loader />
      </>
    );

  return (
    <>
      <div
        className="landingContentGrid"
        style={{ color: "black", background: "whitesmoke" }}
      >
        <div className="landingLeftCol">
          <motion.div
            initial={{ y: "110vh", x: "0vw", opacity: 1 }}
            animate={{ y: "-100vh", x: "0vw", opacity: 1 }}
            transition={{
              stiffness: 110,
              damping: 20,
              delay: 1,
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 3,
            }}
          >
            <img className="floatingCard" src={movie1} alt="movie card" />
          </motion.div>

          <motion.div
            initial={{ y: "110vh", x: "0vw", opacity: 1 }}
            animate={{ y: "-100vh", x: "0vw", opacity: 1 }}
            transition={{
              stiffness: 110,
              damping: 20,
              delay: 8,
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 3,
            }}
          >
            <img className="floatingCard" src={movie7} alt="movie card" />
          </motion.div>
          <motion.div
            initial={{ y: "110vh", x: "10vw", opacity: 1 }}
            animate={{ y: "-100vh", x: "10vw", opacity: 1 }}
            transition={{
              stiffness: 110,
              damping: 20,
              delay: 3,
              duration: 11,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 5,
            }}
          >
            <img className="floatingCard" src={movie2} alt="movie card" />
          </motion.div>
          <motion.div
            initial={{ y: "110vh", x: "20vw", opacity: 1 }}
            animate={{ y: "-100vh", x: "20vw", opacity: 1 }}
            transition={{
              stiffness: 110,
              damping: 20,
              delay: 4.5,
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2,
            }}
          >
            <img className="floatingCard" src={movie3} alt="movie card" />
          </motion.div>
          <motion.div
            initial={{ y: "110vh", x: "20vw", opacity: 1 }}
            animate={{ y: "-100vh", x: "20vw", opacity: 1 }}
            transition={{
              stiffness: 110,
              damping: 20,
              delay: 9.5,
              duration: 14,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2,
            }}
          >
            <img className="floatingCard" src={movie8} alt="movie card" />
          </motion.div>
          <motion.div
            initial={{ y: "110vh", x: "30vw", opacity: 1 }}
            animate={{ y: "-100vh", x: "30vw", opacity: 1 }}
            transition={{
              stiffness: 110,
              damping: 20,
              delay: 7,
              duration: 12,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 3,
            }}
          >
            <img className="floatingCard" src={movie4} alt="movie card" />
          </motion.div>
          <motion.div
            initial={{ y: "110vh", x: "40vw", opacity: 1 }}
            animate={{ y: "-100vh", x: "40vw", opacity: 1 }}
            transition={{
              stiffness: 110,
              damping: 20,
              delay: 9,
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 4,
            }}
          >
            <img className="floatingCard" src={movie5} alt="movie card" />
          </motion.div>
          <motion.div
            initial={{ y: "110vh", x: "50vw", opacity: 1 }}
            animate={{ y: "-100vh", x: "50vw", opacity: 1 }}
            transition={{
              stiffness: 110,
              damping: 20,
              delay: 11,
              duration: 11,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 5,
            }}
          >
            <img className="floatingCard" src={movie6} alt="movie card" />
          </motion.div>
          <motion.div
            initial={{ y: "110vh", x: "50vw", opacity: 1 }}
            animate={{ y: "-100vh", x: "50vw", opacity: 1 }}
            transition={{
              stiffness: 110,
              damping: 20,
              delay: 18,
              duration: 19,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 5,
            }}
          >
            <img className="floatingCard" src={movie9} alt="movie card" />
          </motion.div>
          <motion.div
            initial={{ y: "110vh", x: "55vw", opacity: 1 }}
            animate={{ y: "-100vh", x: "55vw", opacity: 1 }}
            transition={{
              stiffness: 110,
              damping: 20,
              delay: 24,
              duration: 18,
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
              <div className="btnz-cont">
                <div
                  className="btnz landingPageButton"
                  style={{
                    backgroundColor: "rgba(245, 245, 245, 0.7)",
                    zIndex: "100",
                  }}
                  onClick={() => dispatch({ type: ACTIONS.SIGNUPBUTTON })}
                >
                  <p className="registerButton">Register</p>
                  <span class="line-1"></span>
                  <span class="line-2"></span>
                  <span class="line-3"></span>
                  <span class="line-4"></span>
                </div>
              </div>
              <div className="btnz-cont">
                <div
                  className="btnz landingPageButton"
                  style={{
                    backgroundColor: "rgba(245, 245, 245, 0.7)",
                    zIndex: "100",
                  }}
                  onClick={() => dispatch({ type: ACTIONS.LOGINBUTTON })}
                >
                  <p className="registerButton">Sign In</p>
                  <span class="line-1"></span>
                  <span class="line-2"></span>
                  <span class="line-3"></span>
                  <span class="line-4"></span>
                </div>
              </div>

              <div className="btnz-cont">
                <div
                  className="btnz landingPageButton"
                  style={{
                    backgroundColor: "rgba(245, 245, 245, 0.7)",
                    zIndex: "100",
                  }}
                  onClick={() => dispatch({ type: ACTIONS.LEARNMOREBUTTON })}
                >
                  <p className="registerButton">Learn More</p>
                  <span class="line-1"></span>
                  <span class="line-2"></span>
                  <span class="line-3"></span>
                  <span class="line-4"></span>
                </div>
              </div>
              <Modal
                show={state.show}
                onHide={() => dispatch({ type: ACTIONS.HANDLECLOSE })}
              >
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
                  <Button
                    variant="primary"
                    onClick={() => dispatch({ type: ACTIONS.HANDLECLOSE })}
                  >
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
            {state.isNewUser === false ? (
              /* if user clicks login -> */
              <Form noValidate validated={state.validated}>
                <div className="landingPageForm">
                  <div
                    className="formShowToggle"
                    style={{ display: state.formShow }}
                  >
                    <Form.Group controlId="formBasicEmail">
                      {errorL ? (
                        <Alert variant="danger">{errorL.message}</Alert>
                      ) : null}
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
                        onChange={(e) =>
                          dispatch({
                            type: "field",
                            field: "email",
                            value: e.target.value,
                          })
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose a Email.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        onChange={(e) =>
                          dispatch({
                            type: "field",
                            field: "password",
                            value: e.target.value,
                          })
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose a Password.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button type="submit" onClick={submitHandlerLogin}>
                      Login
                    </Button>
                  </div>
                </div>
              </Form>
            ) : (
              /* if user clicks register -> */
              <div className="landingPageForm">
                {/* error handler for Signup */}

                {errorS ? (
                  <Alert variant="danger">{errorS.message}</Alert>
                ) : null}
                <div
                  className="formShowToggle"
                  style={{ display: state.formShow }}
                >
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) =>
                        dispatch({
                          type: "field",
                          field: "email",
                          value: e.target.value,
                        })
                      }
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
                      onChange={(e) =>
                        dispatch({
                          type: "field",
                          field: "username",
                          value: e.target.value,
                        })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={(e) =>
                        dispatch({
                          type: "field",
                          field: "password",
                          value: e.target.value,
                        })
                      }
                    />
                  </Form.Group>

                  <Button type="submit" onClick={submitHandlerSignup}>
                    Register
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
