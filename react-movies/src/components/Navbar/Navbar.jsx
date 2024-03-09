import React from "react";
import LightDarkModeButton from "./LightDarkModeButton";
// import logo from './logo.svg'

const Navbar = ({isLightMode, handleLightMode}) => {
  return (
    <nav className={`navbar ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <div className="navbar__logo">
        <span className="navbar__heading fs-26">Movie Database</span>
      </div>
      <div className="navbar__interactions">
        <div>
          <ul className="interactions__list">
            <li className="list__item fs-18">Trending</li>
            <li className="list__item fs-18">Popular</li>
          </ul>
        </div>
        <div>
          <LightDarkModeButton handleLightMode={handleLightMode}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;