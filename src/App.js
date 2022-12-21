import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import CenterWeather from "./Components/CenterWeather";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <CenterWeather />
      <Footer />
    </div>
  );
}

export default App;
