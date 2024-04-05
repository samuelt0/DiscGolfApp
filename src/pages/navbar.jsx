import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return ( 
    <nav>
      <div className="col-12 col-md-9 col-lg-6 py-5">
        <p className="text-white lead">DiscGolfApp</p>
      </div>
      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/play">Play</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
