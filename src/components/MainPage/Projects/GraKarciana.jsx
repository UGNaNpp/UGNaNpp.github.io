import React from 'react';
import NavHeader from '../NavHeader';
import gra_karciana from './../images/gra-karciana.png';

export default function GraKarciana() {
  return (
    <>
      <NavHeader />

      <h1>Gra karciana oparta na minigrze "Gwint" z Wiedźmina 3: Dziki Gon <a href="https://witcher.fandom.com/wiki/Gwent">(Opis gry)</a></h1>

      <div className="container">
        <img src={gra_karciana} alt="Gra karciana" className="screenshot" />
        <div className="projekt-info">
          <div className="links-container">
            <nav className="repo-link"><a href="https://github.com/UGNaNpp/Gwint">Link do repozytorium</a></nav>
          </div>
          <nav>Projekt w trakcie realizacji</nav>
          <nav>Aplikacja korzysta z następujących technologii:</nav>
          <ul>
            <li>Frontend: React</li>
            <li>Backend: Express js</li>
            <li>Baza danych: MongoDB</li>
          </ul>
        </div>
      </div>
    </>
  );
}
