import React from 'react'
import '../Styles/Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { ReactComponent as UserIcon } from '../Icons/user-icon.svg'
import { ReactComponent as FavIcon } from '../Icons/fav-icon.svg'
import { ReactComponent as CartIcon } from '../Icons/cart-icon.svg'

const Navbar = () => {
  const location = useLocation();

  const getNavStyle = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="navbar">
      <a className="dropdown-icon"><i className={getNavStyle('/')}>&#8801;</i></a>
      <Link to="/" className="logo">
        <h1 className={getNavStyle('/')}>KAIROS</h1>
        <p className={getNavStyle('/')}>Premium Apparel</p>
      </Link>
      <div className="navbar-links">
        <ul>
          <li id="contact" className={getNavStyle('/')}><Link to="#">Contact</Link></li>
          <li className={getNavStyle('/')}><Link to="#"><UserIcon className="icon" id="user" /></Link></li>
          <li className={getNavStyle('/')}><Link to="#"><FavIcon alt="Favorites" className="icon" id="fav" /></Link></li>
          <li className={getNavStyle('/')}><Link to="/cart"><CartIcon className="icon" id="cart" /></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar