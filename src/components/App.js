import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Detail from "../routes/Detail";
import Home from "../routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/:id" element={<Detail/>} />
      </Routes>
    </Router>
  );
}

export default App;
