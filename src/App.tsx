import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/index.css";
import { useEffect } from "react";
import { fetchNews } from "./services/api";
import { UseSelector } from "react-redux";

function App() {

  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
