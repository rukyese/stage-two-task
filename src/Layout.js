import Navbar from './Components/Navbar.js';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Footer from './Components/Footer.js';

const Layout = () => {
  return (
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout