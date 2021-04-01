import React from 'react';
/* vendor imports */
import { Button, Navbar, Alignment } from "@blueprintjs/core";

function NavigationBar() {
    return(
        <>
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>StreamHelper</Navbar.Heading>
                {/* TODO: keep or dlt divider */}
                <Navbar.Divider />
                <Button className="bp3-minimal bp3-large" icon="home" text="Home" />
                <Button className="bp3-minimal bp3-large" icon="film" text="Movies" />
                <Button className="bp3-minimal bp3-large" icon="history" text="Watched Movies" />
                <Button className="bp3-minimal bp3-large" icon="floppy-disk" text="Saved Movies" />
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
                <Button className="bp3-button bp3-minimal bp3-large" icon="user" text="Profile" />
                <Button className="bp3-button bp3-minimal bp3-large" icon="cog" text="Settings" />
            </Navbar.Group>
 
        </Navbar>
        </>
    )
}

export default NavigationBar