import React, {useState, useEffect} from 'react'
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  
    // Cleanup the event listener
    const handleResize = () => {
      showButton();
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                Disc Golf App <i className='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                  <FontAwesomeIcon icon={click ? faTimes : faBars} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/play' className='nav-links' onClick={closeMobileMenu}>
                        Play
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='practice' className='nav-links' onClick={closeMobileMenu}>
                        Practice
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar;

/*different option

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


export default Navbar;*/