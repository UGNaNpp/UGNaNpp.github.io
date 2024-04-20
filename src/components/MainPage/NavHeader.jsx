import React from 'react';
import logo_eve from "./images/logo-eve.gif";

export default function NavHeader() {
  return (
    <header className="main-header">
    <div className="left-side">
      <a href="index.html"><img src={logo_eve} className="logo" alt="Logo"></img></a>
      <h1 className="header-title">Koło Naukowe <span className="header-name">NaN++</span></h1>
    </div>
    <nav className="right-side">
      <a href="w_budowie.html">Aktualności</a>
      <a href="https://inf.ug.edu.pl/~piotao/">Opiekun</a>
      <a href="w_budowie.html">O Kole</a>
      <a href="projects.html">Zrealizowane projekty</a>
      <a href="note_master/index.html" className="rainbow-text">Sekcja artystyczna Koła 🎸</a>
    </nav>
  </header>
  )
}