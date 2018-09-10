import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import registerServiceWorker from './util/registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import emoji from "./images/emoji.svg";
import Link from "react-router-dom/es/Link";

// this component will be rendered by our <___Router>
const App = () => (
    <div>
        <Header />
        <Main />
    </div>
);

const Main = function() {
        return (
            <div className="Header">
                <main>
                    <a href="https://randallsewell.me/blog/index.php" target='_blank'>lonelyBKLYN: Speak!</a>
                </main>
            </div>
        );
};

const Header = function() {
        return (
            <div className="Header">
                <header className="Header-header">
                    <img src={emoji} className="Header-logo" alt="emoji" />
                    <h1 className="Header-title">lonelyBKLYN</h1>
                </header>
                <p className="Header-intro">
                    <h2 className="Header-subtitle">We're coming home!</h2>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/blog/index.php'>Blog</Link></li>
                        </ul>
                    </nav>
                </p>
            </div>
        );
};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>), document.getElementById('root'));
registerServiceWorker();

