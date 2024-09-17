import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li>
          <Link to="/Pricing">Price</Link>
        </li>
        <li>
          <Link to="/FeedBack">FeedBack</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
