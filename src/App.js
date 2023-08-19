import React from "react";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import TimerPage from "./TimerPage";
import DataPage from "./DataPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<TimerPage />} />
      <Route path="/DataPage" element={<DataPage />} />
    </Routes>
  );
}

export default App;
