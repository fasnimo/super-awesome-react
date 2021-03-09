import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/heros/new">Form</Link> | <Link to="/heros">List</Link>
        </div>
    );
};

export default NavBar;