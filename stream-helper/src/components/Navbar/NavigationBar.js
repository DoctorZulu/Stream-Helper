import React from 'react';
/* vendor imports */
import { Button, Navbar, Alignment } from "@blueprintjs/core";
import { Link } from 'react-router-dom';
/* styling */
import '../../styles/NavigationBar.css'

function NavigationBar() {
    return(
        <>
        <Navbar className="mainNavBar">
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>StreamHelper</Navbar.Heading>
                {/* TODO: keep or dlt divider */}
                <Navbar.Divider />
                <Link to={'/home'}>  
                <Button  className="bp3-minimal bp3-large buttonStyle" icon="home" text="Home" />
                </Link>

                <Link to={'/movies'}>  
                <Button  className="bp3-minimal bp3-large buttonStyle" icon="film" text="Movies" />
                </Link>

                <Link to={'/watched'}>  
                <Button className="bp3-minimal bp3-large buttonStyle" icon="history" text="Watched" />
                </Link>

                <Link to={'/saved'}>  
                <Button  className="bp3-minimal bp3-large buttonStyle" icon="floppy-disk" text="My list"/>
                </Link>
          
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
                
                <Link to={'/profile'}>  
                <Button  className="bp3-button bp3-minimal bp3-large buttonStyle" icon="user" text="Profile"/>
                </Link>

                <Link to={'/home'}>  
                <Button  className="bp3-button bp3-minimal bp3-large buttonStyle" icon="cog" text="Settings"/>
                </Link>
                
            </Navbar.Group>

            
 
        </Navbar>
        </>
    )
}

export default NavigationBar