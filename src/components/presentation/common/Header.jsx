import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const activeStyle = {color: "#F0000"};
    return(
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>Dashboard</NavLink>
            <span>&nbsp;</span>
            <span>|</span>
            <span>&nbsp;</span>
            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </nav>
    );
}

export default Header;
