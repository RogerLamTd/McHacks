import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import {SubletForm} from "./subletForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const AppBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div>
        <Navbar style={{backgroundColor:'#A52A2A'}} expand="md">
          <NavbarBrand className="mr-auto"><Link to="/" style={{color: 'white'}}>Home </Link></NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink><Link to="/sublet" style={{color: 'white'}}>Sublet Map</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/subletForm" style={{color: 'white'}}>Sublet Form</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  

const IndexPage = () => (
    <>
    <h1>Welcome to McLet</h1>
    <p title="subtitle">Your local solution to student housing issues!</p>
    <img src="https://www.mcgill.ca/sustainability/files/sustainability/mcgill-campus.png" alt="mcgill"></img>
    </>
)



export default function Test() {
    return(
        <Router>
            <>
            <AppBar />
            
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

