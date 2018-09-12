import emoji from "../../images/emoji.svg";
import Link from "react-router-dom/es/Link";
import React from "react";

const Header = () => {
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

export default Header;