import React from "react";
import UpcomingList from "./UpcomingList/UpcomingList";

const Main = ({isLightMode}) => {
  return (
    <main className={`main ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <UpcomingList isLightMode={isLightMode}/>
    </main>
  )
}

export default Main;