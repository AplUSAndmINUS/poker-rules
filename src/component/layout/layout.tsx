import React from 'react';
import { Button } from 'react-bootstrap';

import { NavigationBar } from './styled';
import logo from '../../assets/images/poker-hand.png';
import './styles.scss';

export const NavBar = () => {
  return (
    <NavigationBar className="navbar navbar-dark px-4">
      <a href="/home" className="navbar-brand" style={{ display: 'flex' }}>
        <img
          src={logo}
          width="32"
          height="32"
          alt="Poker Reference Guide logo" />
        <p className="ps-2">Poker Reference Guide</p>
      </a>
      <Button 
        type="button"
        className="navbar-toggler"
        data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false"
        ria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </Button>
    </NavigationBar>
  )
}

export default NavBar;