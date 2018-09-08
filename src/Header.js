// The Header creates links that can be used to navigate
// between routes.
import Link from "react-router-dom/es/Link";
import React, { Component } from 'react';
import emoji from './emoji.svg'
import './App.css';

class Header extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={emoji} className="App-logo" alt="emoji" />
                    <h1 className="App-title">lonelyBKLYN</h1>
                </header>
                <p className="App-intro">
                    <h2 className="App-subtitle">We're coming home!</h2>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </nav>
                </p>
            </div>
        );
    }
}

export default Header;