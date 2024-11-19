import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo/logo.png';

const Header = () => {
  // const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsNavbarVisible(window.scrollY > 10);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    // ${isNavbarVisible ? 'bg-light' : 'bg-transparent'} used it in navbar for sticky
    <nav className={`navbar navbar-expand-lg   fixed-top bg-danger`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="100" height="60" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* ${isNavbarVisible ? 'text-dark' : 'text-white'}`} used it below */}
              <Link className={`nav-link fs-5 text-white`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link fs-5 text-white`} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link fs-5 text-white`} to="/menu">Our Menu</Link>
            </li>
            {/* <li className="nav-item">
              <Link className={`nav-link fs-5 text-white`} to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link fs-5 text-white`} to="/blog">Blog</Link>
            </li> */}
            <li className="nav-item">
              <Link className={`nav-link fs-5 text-white`} to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
