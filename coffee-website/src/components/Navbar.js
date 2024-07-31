import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import "./Navbar.css";
import { Button } from "./Button";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={Logo} height={170} width={200} alt="Logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link to="#" className="nav-links" onClick={closeMobileMenu}>
                Coffee Machine Services{" "}
                <i
                // className="fa-solid fa-chevron-down fa-2xs"
                // id="dropdownmenu"
                />
              </Link>
              {dropdown && <Dropdown />}
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <Link
                    to="/coffeemachineservices/repair"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Repair
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/coffeemachineservices/service"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Service
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-links" onClick={closeMobileMenu}>
                Shop{" "}
                <i
                // className="fa-solid fa-chevron-down fa-2xs"
                // id="dropdownmenu"
                />
              </Link>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <Link
                    to="/shop/refurbished"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Refurbished Machines
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/shop/parts"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Parts
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/Contact"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Contact Us</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
