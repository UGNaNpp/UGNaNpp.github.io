import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {React, useEffect} from "react"

import MainPage from './components/MainPage/MainPage';
import NoteMaster from './components/MainPage/Projects/trener-nut';

function App() {
  useEffect(() => {
    document.title = 'UG NaN++';
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainPage/>}
          ></Route>
          <Route
            path="/projects/trener-nut"
            element={<NoteMaster/>}
          ></Route>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
