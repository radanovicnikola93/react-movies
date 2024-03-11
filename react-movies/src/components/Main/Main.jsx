import React from "react";
import UpcomingList from "./UpcomingList/UpcomingList";
import TrendingList from "./TrendingList/TrendingList";
import TopRatedList from "./TopRated/TopRated";

const Main = ({isLightMode}) => {
  return (
    <main className={`main ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <UpcomingList isLightMode={isLightMode}/>
      <TrendingList isLightMode={isLightMode}/>
      <TopRatedList isLightMode={isLightMode}/>
    </main>
  )
}

export default Main;