import React from "react";
import UpcomingList from "./UpcomingList/UpcomingList";
import TrendingList from "./TrendingList/TrendingList";
import TopRatedList from "./TopRatedList/TopRatedList";

const Main = ({isLightMode}) => {
  return (
    <main className={`main ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <TopRatedList isLightMode={isLightMode}/>
      <TrendingList isLightMode={isLightMode}/>
      <UpcomingList isLightMode={isLightMode}/>
    </main>
  )
}

export default Main;