import React, { Component } from 'react';


//Source: https://www.youtube.com/watch?v=J_JcKXmZhFo
class ResponsiveSidebar extends Component {

    menu = (e) => {
        e.classList.toggle("show");
    }


    render() { 
        return (  
            <div className="container">
                <nav className="navbar" id="navID">
                    <button type="button" onClick="menu(this)" className="toggle-collapse" id="toggle-button">
                        <span className="toggle-icon"></span>
                    </button>
                </nav>

                <ul className="side-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Contacts</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-youtube"></i>
                        </a>
                    </li>
                </ul>

            </div>
        );
    }
}
 
export default ResponsiveSidebar;
