import React from 'react';
/* vendor imports */
import { Link } from 'react-router-dom';
/* styling */
import '../../styles/NavigationBar.css'
import { Nav, Navbar } from 'react-bootstrap';
/* import userState from Recoil */
import { userState } from "../../recoil/atoms"
import { useRecoilState } from "recoil"

function NavigationBar() {
    const [ user, setUser ] = useRecoilState(userState)
  
    return(
        <>
      
    <Navbar bg="dark" variant="dark" className="mainNavBar">
        <Link to={'/home'}>
        <Navbar.Brand>StreamHelper</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
                    <Link to={'/home'}>  
                    <Nav.Item className="buttonStyle"> Home </Nav.Item>
                    </Link>
                    
                    <Link to={'/movies'}>  
                    <Nav.Item className="buttonStyle" > Movies </Nav.Item>
                    </Link>

                    <Link to={'/watched'}>  
                    <Nav.Item  className="buttonStyle" > Watched </Nav.Item>
                    </Link>

                    <Link to={'/saved'}>  
                    <Nav.Item  className="buttonStyle"> My Saved Movies </Nav.Item>
                    </Link>
        </Nav>
                    <Link to={`/profile/${user && user.id }`}>  
                    <Nav.Item  className="buttonStyle"> Profile </Nav.Item>
                    </Link>
    </Navbar>

 

        
        </>
    )
}

export default NavigationBar