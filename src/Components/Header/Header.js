import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="nav">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Privacy</a>
            </div>
            <h2>Total Cost : 12 Million USD</h2>
        </div>
    );
};

export default Header;