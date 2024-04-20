import React from 'react';
import NavHeader from '../NavHeader';
import note_master from "../images/note_master.png";

export default function NoteMaster() {
  return (
    <>
      <NavHeader />
      <h1 style={{ textAlign: 'center' }}>Aplikacja webowa wspomagająca naukę dźwięków na różnych instrumentach, rozpoznawanie dźwięków ze słuchu oraz czytanie nut.</h1>
      <div className="container">
        <img src={note_master} alt="Mistrz nut" className="screenshot" />
        <div className="projekt-info">
          <div className="links-container">
            <div className="app-link"><a href="https://dawid-kalinowski.github.io/note_master/index.html">Link do aplikacji</a></div>
            <div className="repo-link"><a href="https://github.com/dawid-kalinowski/musical-note-trainer">Link do repozytorium</a></div>
          </div>
          <nav>Projekt w trakcie realizacji</nav>
          <nav>Aplikacja jest napisana w JavaScripcie, HTML oraz CSS.</nav>
        </div>
      </div>
    </>
  )
}
