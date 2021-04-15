import React, { useState } from 'react';
/* styling */
import { Button, FormGroup, InputGroup, ButtonGroup} from "@blueprintjs/core";

function ProfileEditForm() {
    const [ firstName,setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState()
    const [ email, setEmail ] = useState("")
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")


    const submitProfileEdit = () => {
        console.log("Edit User Form Submitted")
    }
    return(
        <>

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
                      onClick={submitProfileEdit}
                    />
        </>
    )
}

export default ProfileEditForm