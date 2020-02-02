import React, {Component} from "react"
import {useState} from "react"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {Route} from "react-router-dom";

export const AppBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
      <NavbarBrand href="/">Home Page</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
        <Nav className="mr-auto"></Nav>
        
        
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                
          <Nav navbar>
            <NavItem>
              <NavLink tag = {Link} to="./sublet">Sublet Map</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./subletForm">Sublet Form</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}



export class Navigation extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Home Page</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  **<NavLink tag={Link} to="/sublet">Sublet Map</NavLink>**
                </NavItem>
                    <NavLink tag= {Link} to="/subletForm">Sublet Forms </NavLink>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }