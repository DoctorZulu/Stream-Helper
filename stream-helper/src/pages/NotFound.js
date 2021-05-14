import {  Button, Container, Row } from 'react-bootstrap';
import React from 'react'
import { Link } from 'react-router-dom';
import NotFoundImage from '../media/404page.gif'
import '../styles/404.css';

function NotFound() {
    return(
        <>
        <Container>
            <Row>
                <h1 className="wrongPageHeading"> There Appears To Be A Glitch In The Matrix... <br/>
                You Must Have Wondered Onto An Unexisting Page!</h1>
            </Row>
            <Row>
                <img src={NotFoundImage} alt="404NotFound" className="notFoundImage" />
            </Row>

            <Row>
                <Link to={'/home'}>
                <Button className="notFoundButtons"> Take The Blue Pill</Button>
                </Link>


                <Link to={'/home'}>
                <Button className="notFoundButtons" variant="danger" > Take The Red Pill</Button>
                </Link>
            </Row>
        </Container>
        </>
    )
}

export default NotFound