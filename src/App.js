import React from "react";
import "./App.css";
import Path_visualizer from "./Path_visualizer/Path_visualizer";
import Navbar from "./Path_visualizer/ui";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Path_visualizer />
    </div>
  );
}

export default App;
