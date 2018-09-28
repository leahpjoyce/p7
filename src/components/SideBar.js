import React, { Component } from 'react';

class Sidebar extends Component {
    render() { 
        return ( 
            <div className="container">
                <div className="options-box">
                    <h1>Find Your New NYC Home</h1>
                    <input id="zoom-to-area-text" type="text" placeholder="Enter your favorite area!" />
                    <input id="zoom-to-area" type="button" value="Zoom" />
                 </div>
            </div>
         );
    }
}
 
export default Sidebar;