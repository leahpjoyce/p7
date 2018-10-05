import React, { Component } from 'react';

class Menu extends Component {

componentDidMount() {
    this.classToggle();
}
        
    classToggle = () => {
        const navs = document.querySelectorAll('.Navbar__Items')
        
        navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));


      }

     
    
    render() { 
        
        return ( 
            <div class="Navbar">
   <div class="Navbar__Link Navbar__Link-brand">
      Website title
    </div>
    <div class="Navbar__Link Navbar__Link-toggle">
      <i class="fas fa-bars"></i>
    </div>
  <nav class="Navbar__Items">
    <div class="Navbar__Link">
      Longer Link
    </div>
    <div class="Navbar__Link">
      Longer Link
    </div>
    <div class="Navbar__Link">
      Link
    </div>
  </nav>
  <nav class="Navbar__Items Navbar__Items--right">
    <div class="Navbar__Link">
      Link
    </div>
    <div class="Navbar__Link">
      Link
    </div>
  </nav>
</div>
         );
    }
}
 
export default Menu;