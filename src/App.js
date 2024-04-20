import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {React, useEffect} from "react"

import MainPage from './components/MainPage/MainPage';
import NoteMaster from './components/MainPage/Projects/trener-nut';
import Neunet1 from './components/MainPage/Projects/Neunet1';

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
          <Route
            path="/projects/neunet1"
            element={<Neunet1/>}
          ></Route>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
