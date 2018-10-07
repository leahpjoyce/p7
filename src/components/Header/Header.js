import React from 'react';
import './Header.css';

//Stateless Functional Component
const Header = (props) => {
    return (
        <div className='header-wrapper'  tabIndex='0'>
            <h1>React + Google Maps API</h1>
            <div className='nav-menu'>
                {/* Code partially taken from W3Schools */}
                <div className='open-button' onClick={props.openNavbar} onKeyPress={props.openNavbar} role='button' aria-label='Open Sidebar'>&#9776;</div> {/*aria-pressed not used; not a toggle button*/}
            </div>
     
        </div>
    );
}

export default Header;