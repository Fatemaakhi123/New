
import React from "react"
const Header = () => {
  return (
    <>
    <header className="header-section">
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <a href="#">
                <img src="assets/images/logo/logo.png" alt="logo" />
              </a>
            </div>
            <div className="menu-area">
              <ul className="menu">
                <li>
                  <a href="#0">Home</a>
                </li>
                <li>
                  <a href="#0">Features</a>
                </li>
                <li>
                  <a href="#0">Pricing</a>
                </li>
                <li>
                  <a href="#0">Resource</a>
                  <ul className="submenu">
                    <li><a href="#0">Item one</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#0">About</a>
                </li>
              </ul>
              <div className="header-btn">
                <div className="btn-one">
                  <a
                  href="#"
                  className="default-btn default-btn--secondary"
                >
                  <span>Sign In</span>
                </a>
                </div>
                <div className="btn-two">
                  <a
                  href="#"
                  className="default-btn default-btn2"
                >
                  <span>Sign up</span>
                </a>
                </div>
              </div>
              <div className="header-bar d-lg-none">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header