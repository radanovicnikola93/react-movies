import React from "react";
import TopRated from "../Pages/TopRated";
import Trending from "../Pages/Trending";
import Upcoming from "../Pages/Upcoming";

const Main = ({isLightMode}) => {
  return (
    <main className={`main ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <TopRated displayNumItems={5} isLightMode={isLightMode} notStretched={true}/>
      <Trending displayNumItems={5} isLightMode={isLightMode} notStretched={true}/>
      <Upcoming displayNumItems={5} isLightMode={isLightMode} notStretched={true}/>
    </main>
  )
}

export default Main;