import React from "react";
import Home from "./pages/Home";
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
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<SelectedArticle />} />
        </Routes>
      </Router>
  );
}

export default App;
