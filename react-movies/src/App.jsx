import {React, useState} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.scss';
// Router Layout
import Layout from "./components/Layout";
// Pages
import Home from "./components/Pages/Home";
import Trending from "./components/Pages/Trending";
import Upcoming from "./components/Pages/Upcoming";
import TopRated from "./components/Pages/TopRated";
import SingleItem from "./components/Pages/SingleItem";

const App = () => {
  const [isLightMode, setIsLightMode] = useState(JSON.parse(localStorage.getItem("theme") ?? false));

  // Light / dark mode handler
  const handleLightMode = () => {
      setIsLightMode(darkMode => {
        localStorage.setItem('theme', !darkMode);
        return !darkMode;
      })
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout isLightMode={isLightMode} handleLightMode={handleLightMode}/>}>
            <Route path="/" element={<Home isLightMode={isLightMode}/>} />
            <Route path="/top_rated/" element={<TopRated isLightMode={isLightMode} />} />
            <Route path="/top_rated/:id" element={<SingleItem isLightMode={isLightMode} />} />
            <Route path="/trending" element={<Trending isLightMode={isLightMode} />} />
            <Route path="/trending/:id" element={<SingleItem isLightMode={isLightMode} />} />
            <Route path="/upcoming" element={<Upcoming isLightMode={isLightMode} />} />
            <Route path="/upcoming/:id" element={<SingleItem isLightMode={isLightMode} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;