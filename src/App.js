import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {React, useEffect} from "react"

import MainPage from './components/MainPage/MainPage';
import NoteMaster from './components/MainPage/Projects/trener-nut';
import Neunet1 from './components/MainPage/Projects/Neunet1';
import GraKarciana from './components/MainPage/Projects/GraKarciana';

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
          <Route
            path="/projects/gra_karciana"
            element={<GraKarciana/>}
          ></Route>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
