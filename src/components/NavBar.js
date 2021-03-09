import React from 'react';
import { NavLink } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div className="navbar">
            <Nav>
                <NavLink href="/heros/new">Form</NavLink>
                <NavLink href="/heros">List</NavLink>
            </Nav>
        </div>
    );
};

export default NavBar;