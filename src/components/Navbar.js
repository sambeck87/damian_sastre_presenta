import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/commons.css';
import '../styles/navbar.css';

const Navbar = () => (
  <div id="nav" className="flex row">
    <NavLink className={({ isActive }) => (isActive ? 'activeLink style' : 'style')} to="/">
      Inicio
    </NavLink>
    <NavLink className={({ isActive }) => (isActive ? 'activeLink style' : 'style')} to="/Capitulos/">
      Podcast
    </NavLink>
    {/*     <NavLink className={({ isActive }) =>
     (isActive ? 'activeLink style' : 'style')} to="/
     Acerca de/">
      Acerca de
    </NavLink> */}
    <NavLink className={({ isActive }) => (isActive ? 'activeLink style' : 'style')} to="/Contacto/">
      Contacto
    </NavLink>
  </div>
);

export default Navbar;
