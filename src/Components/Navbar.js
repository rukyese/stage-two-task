import React from 'react'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id="navbar">
        <a className="dropdown-icon"><i>&#8801;</i></a>
        <div className="logo">
            <h1>KAIROS</h1>
            <p>Premium Apparel</p>
        </div>
        <div className="navbar-links">
            <ul>
                <li><Link to="#">Contact</Link></li>
                <li><Link to="#"><img src="../Icons/user-icon.svg" alt="User" className="icon" id="user" /></Link></li>
                <li><Link to="#"><img src="../Icons/fav-icon.svg" alt="Favorites" className="icon" id="fav" /></Link></li>
                <li><Link to="/cart"><img src="../Icons/cart-icon.svg" alt="Cart" className="icon" id="cart" /></Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar