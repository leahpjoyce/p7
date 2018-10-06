import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {


    render() { 
        return (
            <div className="row">
                <div className="left"/>
                    <h2>Locations</h2>
                    <input type="text" id="mySearch" placeholder="Search.." 
                     onChange={event => this.props.updateQuery(event.target.value)}
                    title="Type in a category"/>
                    <ul id="myMenu">
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
                </div>
          );
    }
}
 
export default Sidebar;