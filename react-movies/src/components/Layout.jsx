import React from "react";
import {Outlet} from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const Layout = ({isLightMode, handleLightMode}) => {
  return (
    <>
      <Navbar isLightMode={isLightMode} handleLightMode={handleLightMode}/>
      <Outlet/>
    </>
  )
}

export default Layout;