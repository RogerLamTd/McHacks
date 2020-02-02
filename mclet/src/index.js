import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import {SubletForm} from "./subletForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


const Example = (props) => {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">McLet</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/sublet">Sublet Map</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/subletForm">Sublet Form</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  

const IndexPage = () => (
    <>
    <Example />
    <h1>Hi!</h1>
    <p> welcome to site</p>
    <p> time to make stuff</p>
    </>
)



export default function Test() {
    return(
        <Router>
            <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home </Link>
                        </li>
                    <li>
                        <Link to="/sublet">Sublet Map</Link>
                    </li>
                    <li>
                        <Link to="/subletForm">Sublet Form</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/sublet">
                    <App />
                </Route>
                <Route path="/subletForm">
                    <SubletForm />
                </Route>
                <Route path="/">
                    <IndexPage />
                </Route>
            </Switch>
            </>
        </Router>
    );
}




ReactDOM.render(<Test />, document.getElementById('root'));

