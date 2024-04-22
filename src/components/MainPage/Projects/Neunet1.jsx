import React from "react";
import NavHeader from "../NavHeader";
import neunet1 from "./../images/neunet1.png";
import "./projects.css"

export default function Neunet1() {
  return (
    <>
      <NavHeader />
      <h1 style={{ textAlign: "center" }}>Sieć neuronowa przyjmująca link do piosenki w serwisie YouTube, i zwracająca gatunek tej piosenki</h1>
      <div className="container">
        <img src={neunet1} alt="Mistrz nut" className="screenshot" />
        <div className="projekt-info">
          <div className="links-container">
            <div className="repo-link">
              <a href="https://github.com/dawid-kalinowski/Inteligencja-obliczeniowa/tree/main/proj1">Link do repozytorium</a>
            </div>
          </div>

          <nav>Projekt w trakcie realizacji</nav>
          <nav>Sieć trenowana była dla 4 gatunków muzyki: metal, pop, k-pop, oraz rap.</nav>
          <nav>Trenowanie sieci neuronowej odbywa się przy użyciu bibliotek Tensorflow, Keras oraz Sklearn.</nav>
          <nav>Aplikacja jest napisana we Flasku.</nav>
          <nav>Aby użyć aplikacji, należy z repozytorium pobrać folder `genres_front`, oraz będąc w folderze `src`, uruchomić plik `server.py`</nav>
        </div>
      </div>
    </>
  );
}
