import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LoginPage/>}
          ></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
