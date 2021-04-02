import React, { useState } from 'react';
import '../styles/LandingPage.css';
/* vendor imports */
import { Button, FormGroup, InputGroup} from "@blueprintjs/core";



function LandingPage() {
    const [isNewUser, setIsNewUser ] = useState(false)
    /* show info about App if true */
    const [knowMore, setKnowMore] = useState(false)
    const [formShow, setFormShow ] = useState("")

    return(
        <>
        <div className="landingContentGrid" style={{color: "black"}}>
            <div className="landingLeftCol">
                <div className="landingLeftText">
                <h1 className="landingTitle"> A Movie Finder App To Save You Time</h1>
                <h3 className="landingSubTitle"> We'll Recommend You Movies You'd Like <br/> Without Showing You Those You've already Seen</h3>
                <Button icon="log-in" className="bp3-outlined bp3-large landingPageButton" text="Login" onClick={() => {setIsNewUser(false); setFormShow(""); setKnowMore(false);}}></Button>
                <Button icon="people" className="bp3-outlined bp3-large landingPageButton" text="Register" onClick={() => {setIsNewUser(true); setFormShow(""); setKnowMore(false);}}></Button>
                <Button icon="help" className="bp3-outlined bp3-large landingPageButton" text="Learn More" onClick={() => {setKnowMore(true); setFormShow("none");}}></Button>
                
                </div>
            </div>
            <div className="landingRightCol">
                <>
                {isNewUser === false ? (
                    /* if user clicks login -> */
                    <div className="landingPageForm">
                    <div className="formShowToggle" style={{display: formShow}}>
                    <FormGroup
                    label="Username"
                    labelFor="username-input"
                    >
                    <InputGroup id="username-input" placeholder="Your Username" />
                    </FormGroup>
    
                    <FormGroup
                    label="Password"
                    labelFor="password-input"
                    >
                    <InputGroup id="password-input" placeholder="Your Password" />
                    </FormGroup>

                    <Button icon="tick-circle" className="bp3-outlined bp3-large bp3-intent-success landingSubmitButton" text="Submit"/>
                    </div>
                    </div>
                    ):  (
                    /* if user clicks register -> */
                    <div className="landingPageForm">
                    <div className="formShowToggle" style={{display: formShow}}>
                      <FormGroup
                     label="Email"
                     labelFor="email-input"
                     >
                     <InputGroup id="email-input" placeholder="Your Email" />
                     </FormGroup>

                     <FormGroup
                     label="Username"
                     labelFor="username-input"
                     >
                     <InputGroup id="username-input" placeholder="Your Username" />
                     </FormGroup>
     
                     <FormGroup
                     label="Password"
                     labelFor="password-input"
                     >
                     <InputGroup id="password-input" placeholder="Your Password" />
                     </FormGroup>

                     <Button icon="tick-circle" className="bp3-outlined bp3-large bp3-intent-success landingSubmitButton" text="Submit"/>
                    </div>
                     </div>)}

                     {knowMore === true ? (
                     <div className="landingKnowMore">
                    <div className="bp3-callout  bp3-icon-automatic-updates infoSign">
                    <h4 className="bp3-heading">Update Your Watched Movie List On The Go</h4>
                    We've Got An iOS Application in the Works! But in the meantime, feel free to bookmark our website to your homepage for ease of access!
                    </div>
                    <br/>
                    <div className="bp3-callout  bp3-icon-predictive-analysis infoSign">
                    <h4 className="bp3-heading">No More Searching Endlessly</h4>
                    You read that right, no more scrolling forever waiting to find the next movie to watch! We'll give you recommendations of movies you HAVEN'T seen!
                    </div>
                    <br/>
                    <div className="bp3-callout  bp3-icon-dollar infoSign">
                    <h4 className="bp3-heading">All of it For Free!</h4>
                    The very best perks for free, no spam, no hassle. Delivering you awesome recommendations straight to you in a matter of seconds.
                    </div>
                    <br/>
                     
                      </div> ) : (<> </>) }


               
                </>
            </div>
        </div>
        </>
    )
}

export default LandingPage
