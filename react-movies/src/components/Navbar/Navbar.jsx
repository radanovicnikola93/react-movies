import React from "react";
import { Link } from "react-router-dom";
import LightDarkModeButton from "./LightDarkModeButton";
// import logo from './logo.svg'

const Navbar = ({isLightMode, handleLightMode}) => {
  return (
    <nav className={`navbar ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <Link to={'/'}>
      <div className="navbar__logo">
        <span className="navbar__heading fs-26"><u>the</u> Movie Database</span>
      </div>
      </Link>
      <div className="navbar__interactions">
        <div>
          <ul className="interactions__list">
            <Link to={'/top_rated'}>
              <li className="list__item fs-18">Top Rated - </li>
            </Link>
            <Link to={'/trending'}>
              <li className="list__item fs-18">Trending - </li>
            </Link>
            <Link to={'/upcoming'}>
              <li className="list__item fs-18">Upcoming</li>
            </Link>
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