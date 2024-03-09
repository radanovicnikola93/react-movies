import React from "react";

const LightDarkModeButton = ({handleLightMode}) => {
  return (
    <button className="navbar__toggler" onClick={handleLightMode}>Toggle dark/light</button>
  )
}

export default LightDarkModeButton;