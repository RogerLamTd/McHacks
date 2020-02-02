import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';

const IndexPage = () => (
    <>
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
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sublet">Sublet Map</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/sublet">
                 <App />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            </>
        </Router>
    );
}

function Home(){
    return <h2>Home</h2>;
}



ReactDOM.render(<Test />, document.getElementById('root'));
