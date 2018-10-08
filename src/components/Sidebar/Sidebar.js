import React, { Component } from "react";
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    //console.log('my props', this.props.venues)
    return (
      <div id="navbar" className="sidenav" tabIndex='2'>

        <div className='nav-header'>

          <div className='icon-btn-wrapper'>
  
            <button className='close-button' 
            onClick={this.props.hamburgerClose} 
            aria-label='Close sidebar'>x</button> 
          </div>

          <div className='filter' role='filter'>
            <input
              className='sidebar-filter'
              type='text'
              placeholder='Search'
              //value={this.props.query}
              onChange={event => this.props.updateQuery(event.target.value)}
              aria-label='Food Restaurant'
            /> 
          </div>

        </div>
        <nav id='sidebar-list'> 
          <ul role='menu'>
            {this.props.showingLocations.map((venus) =>
              <li key={venus.venue.id}
              tabIndex='0'
              role='menuitem'
              aria-label={venus.venue.name + 'click to read more'}
              >
              <a onClick={() => this.props.markerClicked(venus.venue.id)}>
                {venus.venue.name}
              </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;