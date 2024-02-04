import React from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { MdFavorite } from "react-icons/md";
import '../public/css/Navbar.css';

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <ul className="navbar-menu">
          <li>
            <a href='redes'>Únete a Nosotros</a> |
            <a href='ayuda'>Ayuda</a> |
            <Link to="/Login">Iniciar Sesión</Link>
          </li>
        </ul>
      </nav>
      
      <nav className="second-navbar">
        <ul className="nav-links">
          <li><a href='novedades'>Novedades</a></li>
          <li><a href='categoria'>Categoría</a></li>
          <li><a href='oferta'>Ofertas</a></li>
          <li><a href='contacto'>Contacto</a></li>
        </ul>
        
        <div className="nav-right">
          <div className="search-container">
            <CiSearch className="search-icon" />
            <input type="text" placeholder="Buscar" className="search-input" />
          </div>
          <Link to="/favoritos" className="favorite">
            <MdFavorite className='favorite-icon'/>
          </Link>
          <Link to="/carrito" className="shopping">
            <CiShoppingCart className='shopping-icon'/>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
