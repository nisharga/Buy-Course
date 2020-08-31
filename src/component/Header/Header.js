import React from 'react';
import Logo from './logo.jpg';
import './Header.css'

const Header = () => {
    return (
        <div className="topbar">
            <div className="logo">
                <a href=""><img src={Logo} alt="logo"/></a>
            </div>
            <nav>
                <a href="/shop">our shop</a>
                <a href="/review">Review Order</a>
                <a href="/manage">Manage Your Order</a>
            </nav>
        </div>
    );
};

export default Header;