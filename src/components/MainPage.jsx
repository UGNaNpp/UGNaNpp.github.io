import React from "react";

import logo-eve from ""

export default function MainPage() {
  return(
    <>
    <header className="main-header">
    <div className="left-side">
      <a href="index.html"><img src="logo-eve.gif" className="logo"></a>
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


  <main>
    <nav className="left-background">
      <img src="background1.png" className="background-image">
      <img src="background2.png" className="background-image">
    </nav>
    <nav className="right-background">
      <img src="background3.png" className="background-image">
      <img src="background4.png" className="background-image">
    </nav>
    </nav>
    <section className="left-section">

      <div className="social-links">
        <a href="https://github.com/UGNaNpp" className="github-link">GitHub</a>
        <a href="https://discord.gg/vB69JExmqu" className="discord-link">Discord</a>
      </div>

      <h3 className="our-team">Nasza drużyna</h3>
      <ul>
        <li>
          <strong>Prezes koła:</strong>
          <a href="https://github.com/I-am-not-a-weeb" className="member-link">Dominik Krakowski</a><br>
          <nav className="email">Email: d.krakowski.401@studms.ug.edu.pl</nav><br>
        </li>
        <li>
          <strong>Wiceprezes koła:</strong>
          <a href="https://github.com/dawid-kalinowski" className="member-link">Dawid Kalinowski</a><br>
          <nav className="email">Email: d.kalinowski.619@studms.ug.edu.pl</nav><br>
        </li>
        <li>
          <strong>Wiceprezes koła:</strong>
          <a href="https://github.com/JanJus7" className="member-link">Jan Juszczyński</a><br>
          <nav className="email">Email: j.juszczynski.415@studms.ug.edu.pl</nav><br>
        </li>
        <li>
          <strong>Członkowie koła:</strong><br>
          <ul>
            <li><a href="https://github.com/KopczewskiMichal" className="member-link">Michał Kopczewski</a><br>
              <nav className="email">Email: m.kopczewski.632@studms.ug.edu.pl</nav>
            </li><br>
            <li><a href="https://github.com/bartosz-urbanowicz" className="member-link">Bartosz Urbanowicz</a><br>
              <nav className="email">Email: b.urbanowicz.411@studms.ug.edu.pl</nav>
            </li>
          </ul>
        </li>
      </ul>
    </section>


    <section className="main-section">
      <h2 className="section-title">Projekty w trakcie realizacji</h2>
      <ul className="project-list">
        <li className="project-item">
          <a href="projekty/trener-nut.html">
            <img src="note_master.png" alt="Trener nut" className="project-img">
            <h3>Trener nut</h3>
          </a>
        </li>
        <li className="project-item">
          <a href="projekty/gra-karciana.html">
            <img src="gra-karciana.png" alt="Gra karciana" className="project-img">
            <h3>Gra karciana</h3>
          </a>
        </li>
        <li className="project-item">
          <a href="projekty/neunet1.html">
            <img src="neunet1.png" alt="Sieć neuronowa 1" className="project-img">
            <h3>Sieć neuronowa rozpoznająca gatunki muzyki</h3>
          </a>
        </li>
      </ul>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Koło Naukowe UG NaN++</p>
  </footer>
    </>
  )
}