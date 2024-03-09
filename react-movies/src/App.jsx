import {React, useState} from "react";
import './App.scss'
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";


const App = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  // Light / dark mode handler
  const handleLightMode = () => {
    setIsLightMode(prevState => !prevState)
  }

  return (
    <>
      <Navbar isLightMode={isLightMode} handleLightMode={handleLightMode}/>
      <Jumbotron isLightMode={isLightMode}/>
    </>
  )
}

export default App;