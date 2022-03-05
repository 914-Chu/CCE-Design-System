import React from 'react';
import '../assets/Navigation.scss';
import { Container, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Link} from 'react-router-dom';

function Navigation(){
    return(
        <div className='Navbar'>
            <div className='Navbar-brand Navbar-row'>
                <Link to="/" className='link-brand'>
                    I Fly Young CCE
                </Link>
            </div>
            <div className='Navbar-options Navbar-row'>
                <div className='Navbar-col'>
                <Link to="/content" className='link-options'>
                    Content
                </Link>
                </div>
                <div className='Navbar-col'>
                <Link to="/design" className='link-options'>
                    Design
                </Link>
                </div>
                <div className='Navbar-col'>
                <Link to="/components" className='link-options'>
                    Components
                </Link>
                </div>
                <div className='Navbar-col'>
                    <input type="text" placeholder='Search' className='link-options search'/>
                </div>
            </div>
        </div>
    );
}

export default Navigation;