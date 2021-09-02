import React from 'react';
import * as Bootstrap from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './index.css';

function NavBar() {
  
    return (
      
        <Bootstrap.Navbar collapseOnSelect expand="md">
          <div className="container">
        <Bootstrap.Navbar.Brand><Link to="/">Cloudy</Link></Bootstrap.Navbar.Brand>
        <Bootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Bootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <Bootstrap.Nav className="mr-auto p-2">
            <Bootstrap.Nav.Link href="/weather">Weather</Bootstrap.Nav.Link>
            <Bootstrap.Nav.Link href="#">Contact</Bootstrap.Nav.Link>
          </Bootstrap.Nav>
          <Bootstrap.Nav>
            <Bootstrap.Button variant="outline-info" href="https://openweathermap.org/api">Get your API!</Bootstrap.Button>
          </Bootstrap.Nav>
        </Bootstrap.Navbar.Collapse>
        </div>
        </Bootstrap.Navbar>
      
      
    );
  }
  
  export default NavBar;