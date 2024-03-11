import React from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import Main from "../Main/Main";

const Home = ({isLightMode}) => {
  return (
    <>
      <Jumbotron isLightMode={isLightMode}/>
      <Main isLightMode={isLightMode} />
    </>
  )
}

export default Home;