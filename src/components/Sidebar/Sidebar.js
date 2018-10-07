import React, { Component } from "react";
import './Sidebar.css';

class Sidebar extends Component {


  render() {
    //console.log('my props', this.props.venues)

    return (
      //Code partially taken from W3Schools
      <div id="navbar" className="sidenav" tabIndex='0'>

        <div className='nav-header'>

          <div className='icon-btn-wrapper'>
  
            <button className='close-button' onClick={this.props.closeNavbar} aria-label='Close sidebar'>x</button> {/*implicit ARIA role: 'button' | aria-pressed not used; not a toggle button*/}
          </div>

          <div className='filter-box' role='application'>
            <input
              className='sidebar-filter'
              type='text'
              placeholder='Search'
              //value={this.props.query}
              onChange={event => this.props.updateQuery(event.target.value)}
              aria-label='Food Restaurant'
            /> {/*implicit ARIA role: 'textbox'*/}
          </div>

        </div>
        <nav id='sidebar-list' className='locations'> {/*implicit ARIA role: 'navigation'*/}
          <ul aria-label='Outdoor locations in Sintra list' role='menu'>
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