import React from "react";
import "./Home.css";
import background from "../Assets/background.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="background">
      <div className="content">
        <h1>Ace Every Interview, Secure Your Dream Job</h1>
        <h3>Your Success Starts with Us</h3>
        <Link to="/Pricing">
          <button>VIEW SERVICES</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
