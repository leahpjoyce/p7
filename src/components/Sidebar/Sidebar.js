import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {

    render() { 
        return (
            <div className="row">
                <div className="left"/>
                    <h2>Locations</h2>
                    <input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search.." title="Type in a category"/>
                    <ul id="myMenu">
                        <li><a href="#">Restaurant</a></li>
                        <li><a href="#">Museum</a></li>
                        <li><a href="#">Beach</a></li>
                        <li><a href="#">Tour</a></li>
                    </ul>
                </div>
          );
    }
}
 
export default Sidebar;