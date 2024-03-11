import {React, useState} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.scss';
// Pages
import Home from "./components/Pages/Home";
import Trending from "./components/Pages/Trending";
import Upcoming from "./components/Pages/Upcoming";
import Layout from "./components/Layout";

const App = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  // Light / dark mode handler
  const handleLightMode = () => {
    setIsLightMode(prevState => !prevState)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout isLightMode={isLightMode} handleLightMode={handleLightMode}/>}>
            <Route path="/" element={<Home isLightMode={isLightMode}/>} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/upcoming" element={<Upcoming />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;