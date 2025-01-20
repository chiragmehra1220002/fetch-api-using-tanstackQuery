import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/rq" className="nav-link" >
            Users
          </NavLink>
        </li>
        {/* Add more links here if needed */}
      </ul>
    </nav>
  );
};

export default Header;

