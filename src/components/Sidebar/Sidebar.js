import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            active: true,
        };

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState({
            active: !this.state.active
        });
    }


    render() { 
        return (
            <div className="row">
                 <div className="toggle-btn" onClick={this.handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
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