import React from 'react';
import './Header.css';

//Stateless Functional Component
const Header = (props) => {
    return (
        <div className='header-wrapper'  tabIndex='0'>
            <h1>Leah's Neighborhood Map</h1>
            <div className='nav-menu'>
                <div className='open-btn' onClick={props.openNavbar} onKeyPress={props.openNavbar} role='button' aria-label='Open Sidebar'>&#9776;</div> {/*aria-pressed not used; not a toggle button*/}
            </div>

        </div>
    );
}

export default Header;
