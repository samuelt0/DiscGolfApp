import React, {useState, useEffect} from 'react'
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [click, setClick] = useState(false);
  const[button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
      setClick(false);
    }
  }

  useEffect(() => {
    showButton();
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                Disc Golf App <i className='fab faTypo3' />
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
                    <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Login
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>LOG IN</Button>}
        </div>
      </nav>
    </>
  )
}
// make line 62 button go to /login not /sign-up
export default Navbar;
