import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";//  // Importing CSS file for styling

export default function Header() {
  return (
    <div className="navbar bg-warning">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
        </li>
        </ul>
    </div>
  );
}
