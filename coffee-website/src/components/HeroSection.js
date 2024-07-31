import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import home from "../images/home.jpg";

function HeroSection() {
  return (
    <div className="hero-container">
      <img id="home-img" src={home} alt="background" />
      <h1>Coffee Machine Fixer</h1>
      <p>Servicing & Repairing All Major Brands Of Coffee Machines</p>
      <div className="hero-btn">
        <Button
          className="btns"
          buttonStyle="btn-outline"
          buttonSize="btn--large"
        >
          Find out More
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
