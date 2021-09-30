import React from 'react';
import "../nav/Nav.css";

const Nav = () => {
    return (
        <div className="navbar">
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/tshirt">Tshirt</a>
            <a href="/contact">Contact</a>
        </div>
    );
};

export default Nav;