import React,{useEffect, useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
// import { click } from '@testing-library/user-event/dist/click';// do a search about this event
import { Button } from './Button';


function Navbar() {
  const [click,setClick]=useState(false);
  const [button,setButton] = useState(true);


  const handleclick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth<=960) {
      setButton(false);
    }else {
      setButton(true);
    }
  };

  useEffect(() =>{
    showButton();
  },[]);
  
  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          TRVL  <i class="fa-solid fa-chess-rook"></i>
          </Link> 
          <div className='menu-icon' onClick={handleclick}>
          <i className={click?'fas fa-times':'fas fa-bars'}/>
          </div>
          <ul className={click?'nav-menu active':'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Product</Link>
            </li>
            <li className='nav-item'>
              <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>Sign-up</Link>
            </li>
          </ul>
          { button && <Button buttonStyle='btn--outline'>Sign up</Button> }
          </div>
          </nav>
    </>
  )
}

export default Navbar
