import React from 'react';
/* vendor imports */
import { Button, AnchorButton, Navbar, Alignment } from "@blueprintjs/core";
import { Link } from 'react-router-dom';
function NavigationBar() {
    return(
        <>
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>StreamHelper</Navbar.Heading>
                {/* TODO: keep or dlt divider */}
                <Navbar.Divider />
                <Link to={'/home'}>  
                <Button  className="bp3-minimal bp3-large" icon="home" text="Home" />
                </Link>

                <Link to={'/movies'}>  
                <Button  className="bp3-minimal bp3-large" icon="film" text="Movies" />
                </Link>

                <Link to={'/watched'}>  
                <Button className="bp3-minimal bp3-large" icon="history" text="Watched Movies" />
                </Link>

                <Link to={'/saved'}>  
                <Button  className="bp3-minimal bp3-large" icon="floppy-disk" text="Saved Movies"/>
                </Link>
          
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
                
                <Link to={'/profile'}>  
                <Button  className="bp3-button bp3-minimal bp3-large" icon="user" text="Profile"/>
                </Link>

                <Link to={'/home'}>  
                <Button  className="bp3-button bp3-minimal bp3-large" icon="cog" text="Settings"/>
                </Link>
                
            </Navbar.Group>

            
 
        </Navbar>
        </>
    )
}

export default NavigationBar