import React, {useState} from 'react';
import NavigationBar from '../components/Navbar/NavigationBar'
/* styling */
import { Button, FormGroup, InputGroup, ButtonGroup} from "@blueprintjs/core";
import '../styles/Profile.css'
/* GraphQl */
import { useMutation } from "@apollo/client";
import { UPDATEUSER } from "../graphql/operations";
import HeroBanner from '../components/HeroBanner/HeroBanner';

function Profile() {
    /* user information */
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    /* Hero Banner */
    const heroTitle = `Hey CurrentUserName!`
    const heroText = "Edit Your Profile Details Or View Some Of Your Curated Lists Below"

    /* show profile details */
    const [listActive, setListActive ] = useState(false)
    const [likedActive, setLikedActive] = useState(false)


    /* GQL */

    const [
        update,
        { loading: loadingS, error: errorS, data: dataS },
      ] = useMutation(UPDATEUSER);

    const submitHandlerSignup = async (e) => {
        e.preventDefault();
        await update({
          variables: {
            updateUserDetails: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                username: username,
                password: password,
            },
          },
        });
      };

    return(
        <>
        <NavigationBar />
        <HeroBanner heroText = {heroText} heroTitle = {heroTitle} />
        <div className="profilePageContainer">
            <div className="profileShowDetails">

                <div className="profileDetails">
                    <h2> User Bio: </h2>
                    <ButtonGroup minimal={true} >
                        <Button icon="heart" style={{backgroundColor: "whitesmoke", margin: "25px"}} onClick={() => { setListActive(false); setLikedActive(true)}}>Liked Movies</Button>
                        <Button icon="function" style={{backgroundColor: "whitesmoke", margin: "25px"}} onClick={() => { setListActive(true);setLikedActive(false)}}>Your Curated Lists</Button>
                    </ButtonGroup>
                    { listActive === true ?
                        <> 
                        <div className="listShowProfile">
                         <h1> Your Lists:</h1>
                         <h2> show movie card </h2>
                        </div>
                         </>
                          : <> </>}

                    { likedActive === true ?
                        <> 
                        <div className="listShowProfile">
                         <h1> Movies You've Liked:</h1>
                         <h2> show movie card </h2>
                        </div>
                         </>
                          : <> </>}


                </div>
            </div>

            <div className="profileEditSection">
                <div className="profileEditForm">
            <FormGroup label="FirstName" labelFor="firstname-input">
                    <InputGroup
                      id="firstname-input"
                      placeholder="Your First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
            </FormGroup>

            <FormGroup label="Last Name" labelFor="lastname-input">
                    <InputGroup
                      id="lastname-input"
                      placeholder="Your Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup label="Email" labelFor="email-input"> 
                    <InputGroup
                      id="email-input"
                      placeholder="Your Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup label="Username" labelFor="username-input"> 
                    <InputGroup
                      id="username-input"
                      placeholder="Your Username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    </FormGroup>
                   
                    <FormGroup label="Password" labelFor="password-input"> 
                    <InputGroup
                      id="password-input"
                      placeholder="Your Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    </FormGroup>
                    

                    <Button
                      icon="tick-circle"
                      className="bp3-outlined bp3-large bp3-intent-success landingSubmitButton"
                      text="Submit"
                      onClick={submitHandlerSignup}
                    />
               
                </div>
            </div>
        </div>
        
        
        </>
    )
}

export default Profile