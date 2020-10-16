// Import Dependencies
import React from 'react';
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/listings" activeClassName="active">Listings</NavLink>
        <NavLink to="/login" activeClassName="active">Login</NavLink>
        <NavLink to="/register" activeClassName="active">Register</NavLink>
      </nav>
    </header>
  )
}
