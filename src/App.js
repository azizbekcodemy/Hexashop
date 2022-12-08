import React from "react";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import "./index.css"
import Mens from "./pages/mens";
import Explor from "./pages/explor";
import Women from "./pages/women";
import Kids from "./pages/kidis";



function App() {
  return (
    
    <>

    <div id="welcom">
      <Navbar/>
      <Home/>
      <Mens/>
      <Women/>
      <Kids/>
      <Explor/>
    
   
      </div>
    </>
  );
}

export default App;
