import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../context/UseAuth';


const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar className="navbar" variant="light" sticky='top' expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img className="imge" src='https://demo.maximumtheme.net/farrell_html/assets/images/logo.png' alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#destinations">Destinations</Nav.Link>
            <Nav.Link as={HashLink} to="/home#tourplan">TourPlan</Nav.Link>
            <Nav.Link as={HashLink} to="/home#blog">Blog</Nav.Link>
            {user?.email ? <Nav.Link as={Link} to="/myorder#myorder">My Order</Nav.Link> : ''}
            {user?.email ? <Nav.Link as={Link} to="/allorders#allorders">All Order</Nav.Link> : ''}
            {user?.email ? <Nav.Link as={Link} to="/addlocation#addlocation">Add Location</Nav.Link> : ''}
            {
              user?.email ?
                <button className='nav-btn' onClick={logOut}>Log Out</button>
                : <Nav.Link as={Link} to="/login">SignIn</Nav.Link>}

            <Navbar.Text>
              <p className="mt-3">Signed in as: {user?.displayName}</p>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;