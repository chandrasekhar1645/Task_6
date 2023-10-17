import React from 'react';
import './App.css';
import Portfolio from './about';
import linkedin from './linkedin.jpeg';
import ContactInfo from './contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={linkedin} alt="Ash" style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
        <h1>Chandra Sekhar Challa</h1>
        <p>Web Developer / Designer</p>
        <div className="signature">Welcome!!!</div>
      </header>
      <nav className="App-nav">
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
      <section id="about" className="App-section">
        <h2>About Me</h2>
        <Portfolio />
      </section>
      <section id="portfolio" className="App-section">
        <h2>Portfolio</h2>
        <a href="https://drive.google.com/file/d/13Q478FEske7CUvSk5DbW3FsVyBOh2clV/view?usp=sharing" target="c">Resume</a><br></br>
       <a href="https://www.linkedin.com/in/chandra-sekhar-challa-4241a5269/" target="blank">
       visit linkdn</a><br></br>
      </section>
      <section id="contact" className="App-section">
        <h2>Contact</h2>
        <ContactInfo/>
      </section>
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved 🥸</p>
      </footer>
    </div>
  );
}

export default App;