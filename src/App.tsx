import React from "react";
import Home from "./pages/Home";
import "./styles/index.css";
import SelectedArticle from "./pages/SelectedArticle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/*
Prevenir random gap.
Filtros.
Historial de búsqueda.
Paginado.
*/

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<SelectedArticle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
