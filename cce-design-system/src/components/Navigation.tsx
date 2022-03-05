import React from 'react';
import '../assets/Navigation.scss';
import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation(){
    return(
        <div className='Navbar'>
            <Navbar bg="dark" variant="dark">
                <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>I Fly Young CCE</Navbar.Brand>
                </LinkContainer>
                <LinkContainer to="/content">
                    <Nav.Link>Content</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/design">
                    <Nav.Link>Design</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/components">
                    <Nav.Link>Components</Nav.Link>
                </LinkContainer>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;