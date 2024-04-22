import React from "react";
import { useNavigate } from "react-router-dom";
import background1 from "./images/background1.png";
import background2 from "./images/background2.png";
import background3 from "./images/background3.png";
import background4 from "./images/background4.png";
import gra_karciana from "./images/gra-karciana.png";
import neunet1 from "./images/neunet1.png";
import note_master from "./images/note_master.png";
import NavHeader from "./NavHeader";

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <>
      <NavHeader/>

      <main>
        <nav className="left-background">
          <img src={background1} className="background-image" alt="Background"></img>
          <img src={background2} className="background-image" alt="Background"></img>
        </nav>
        <nav className="right-background">
          <img src={background3} className="background-image" alt="Background"></img>
          <img src={background4} className="background-image" alt="Background"></img>
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
              <a href="https://github.com/I-am-not-a-weeb" className="member-link">Dominik Krakowski</a><br />
              <nav className="email">Email: d.krakowski.401@studms.ug.edu.pl</nav><br />
            </li>
            <li>
              <strong>Wiceprezes koła:</strong>
              <a href="https://github.com/dawid-kalinowski" className="member-link">Dawid Kalinowski</a><br />
              <nav className="email">Email: d.kalinowski.619@studms.ug.edu.pl</nav><br />
            </li>
            <li>
              <strong>Wiceprezes koła:</strong>
              <a href="https://github.com/JanJus7" className="member-link">Jan Juszczyński</a><br />
              <nav className="email">Email: j.juszczynski.415@studms.ug.edu.pl</nav><br />
            </li>
            <li>
              <strong>Członkowie koła:</strong><br />
              <ul>
                <li><a href="https://github.com/KopczewskiMichal" className="member-link">Michał Kopczewski</a><br />
                  <nav className="email">Email: m.kopczewski.632@studms.ug.edu.pl</nav>
                </li><br />
                <li><a href="https://github.com/bartosz-urbanowicz" className="member-link">Bartosz Urbanowicz</a><br />
                  <nav className="email">Email: b.urbanowicz.411@studms.ug.edu.pl</nav>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="main-section">
          <h2 className="section-title">Projekty w trakcie realizacji</h2>
          <ul className="project-list">
          <li className="project-item" onClick={() => navigate("/projects/trener-nut")}>
              <img src={note_master} alt="Trener nut" className="project-img" />
              <h3>Trener nut</h3>
          </li>
            <li className="project-item" onClick={()=>{navigate("/projects/gra_karciana")}}>
                <img src={gra_karciana} alt="Gra karciana" className="project-img"></img>
                <h3>Gra karciana</h3>
            </li>
            <li className="project-item" onClick={()=> {navigate("/projects/neunet1")}}>
                <img src={neunet1} alt="Sieć neuronowa 1" className="project-img"></img>
                <h3>Sieć neuronowa rozpoznająca gatunki muzyki</h3>
            </li>
            
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Koło Naukowe UG NaN++</p>
      </footer>
    </>
  );
}
