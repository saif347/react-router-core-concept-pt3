// import React from 'react';
import {NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <h3>welcome to react router</h3>
            <p>you will learn a lot about react router in this section</p>
            <nav className="nav">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>about</NavLink>
                <NavLink to='/contact'>contact</NavLink>
                <NavLink to='/users'>users</NavLink>
                <NavLink to='/countries'>Countries</NavLink>
                <NavLink to='/post'>Posts</NavLink>
                

            </nav>
        </header>
            
    );
};

export default Header;