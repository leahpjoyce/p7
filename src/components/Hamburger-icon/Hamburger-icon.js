import React, { Component } from 'react';
 import './Hamburger-icon.css';

 class Hamburger extends Component {
    
    toggleHide = () => {
        const list = document.querySelector('.row');
        list.classList.toggle('hidden');
        const map = document.querySelector('#map');
        map.classList.toggle('full');
    }


     render() { 
        return ( 
           <div className="toggle-btn" onClick={this.toggleHide}>
            <span></span>
            <span></span>
            <span></span>
           </div>
         );
    }
}
 
export default Hamburger;