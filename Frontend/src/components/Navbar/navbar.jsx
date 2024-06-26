import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LuSun, LuMoonStar } from "react-icons/lu";

import logo from '../../assets/images/logo.png'

const Navbar = () => {

const [isDarkMode, setIsDarkMode] = useState('drak'); // Initial state is light mode

const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    
};

useEffect(() => {
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
}, [isDarkMode]);

  return (
    <nav className="navbar bg-base-300 drop-shadow-md rounded-xl">
      <NavLink className="flex-1" to="/">
        <img src={logo} alt="logo" width="100px" height="150px"/>
        <h1 className='btn btn-ghost text-xl'>E-Sanjeevani</h1>
      </NavLink>
      <ul className="flex space-x-4">
        <li className="nav-item">
          <NavLink className="nav-link hover:text-gray-300" to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link hover:text-gray-300" to="/login" activeClassName="active">
            <button className='btn btn-outline'>Sign in</button>
          </NavLink>
        </li>
        <li>
        <button className={`btn ${isDarkMode ? 'btn-ghost' : 'btn-secondary'}`} onClick={toggleTheme}>
            {isDarkMode ? <LuMoonStar/> : <LuSun/> }
        </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
