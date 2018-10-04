import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => (
    <nav className="side-drawer">
        <input id="address" type="text" placeholder="Enter your favorite area!"></input>
        <ul>
            <li><a href="/">Products</a></li>
            <li><a href="/">Users</a></li>

        </ul>
    </nav>
);

export default sideDrawer;