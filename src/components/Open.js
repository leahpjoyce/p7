import React, { Component } from 'react';

class Open extends Component {
    render() { 
        return ( 
            <div id="main">
                <h2>Sidenav Push Example</h2>
                <p>Click on the element below to open the side navigation menu, and push this content to the right.</p>
                <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>
            </div>

         );
    }
}
 
export default Open;