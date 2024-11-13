import React, { useState } from 'react';
import '../css/Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Handle the search functionality here
    console.log('Search Term:', searchTerm);
  };

  return (
    <>
      <nav>
        <div className='logo'>
          <img src="nike-4.svg" alt="logo" />
        </div>
        <div className='navlinks'>
          <Link to="/" className='link'>Home</Link>
          <NavLink to="/about" className='link'>About</NavLink>
          <Link to="/product" className='link'>Product</Link>
          <NavLink to="/cart" className='link'>Cart</NavLink>
        </div>
        <div className='search-bar'>
          <form onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              value={searchTerm} 
              onChange={handleSearchChange} 
              placeholder="Search..."
            />
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        <div className='login'>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
