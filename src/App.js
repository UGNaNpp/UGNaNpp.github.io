import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"

import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainPage/>}
          ></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
