import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand">Clock app</div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact>
          Time
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/two">
          Clock2
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/one">
          Clock3
        </NavLink>
      </li>
    </ul>
  </nav>
);
