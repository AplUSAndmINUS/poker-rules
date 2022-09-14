import React from 'react';
import { Button, ButtonGroup, Navbar } from 'react-bootstrap';

import logo from '../../assets/images/poker-hand.png';
import { StyledAnchor } from './styled';

export const NavBar = () => {
  return (
    <Navbar expand="md" style={{ backgroundColor: "#35654D" }}
      className="navbar navbar-light sticky-top px-2">
      {/* <Container>
        <Button 
          type="button"
          color="#35654D"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Navbar.Brand href="/home" className="align-items-center justify-content-left">
          <Container className="justify-content-left align-items-center">
            <img
              src={logo}
              width="32"
              height="32"
              alt="Poker Reference Guide logo" />
            <p className="ps-2 mb-0">Poker Reference Guide</p>
          </Container>
        </Navbar.Brand>
        <Anchor href="/home" className="navbar-brand" style={{ display: 'flex' }}>
        </Anchor> 
        <div className="navbar-nav justify-content-left align-items-center"> */}
        <Navbar.Brand href="/home">
          <img
            src={logo}
            width="32"
            height="32"
            alt="Poker Reference Guide logo" />
      </Navbar.Brand>
      <ButtonGroup aria-label="Navigation options">
        <StyledAnchor className="nav-item nav-link active me-1" href="/home">
          <Button variant="outline-light">Home</Button>
        </StyledAnchor>
        <StyledAnchor className="nav-item nav-link me-1" href="/games">
          <Button variant="outline-light">Games</Button>
        </StyledAnchor>
        <StyledAnchor className="nav-item nav-link" href="/rankings">
          <Button variant="outline-light">Hand Rankings</Button>
        </StyledAnchor>
      </ButtonGroup>
        {/* <StyledAnchor className="nav-item nav-link disabled me-3" href="/home">Glossary</StyledAnchor> */}
    </Navbar>
  )
}

export default NavBar;