import React, { Component } from 'react';

import './Header.css';
import Hamburger from '../Hamburger-icon/Hamburger-icon';


class Header extends Component {
  
    render() { 
        return (
            <div className="header">
                <h1>Google Maps + React
                </h1>
                <Hamburger />

            </div>
         );
    }
}
 
export default Header;