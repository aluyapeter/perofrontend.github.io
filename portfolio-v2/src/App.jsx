import React from 'react';
import './App.scss';
import Header from './components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Articles from './components/Articles';

function App() {
  return (
    <div className="container">
      <nav className="top-nav">
        <Header />

        {/* <button className="theme-toggle-btn" onClick={toggleTheme}>
          <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
        </button> */}
      </nav>

      <main>
        <Hero />
        <Projects />
        <Experience />
        <Articles />
      </main>
      <footer
        style={{
          textAlign: 'center',
          // padding: '2rem 0',
          opacity: 0.5,
          fontSize: '0.9rem',
        }}
      >
        <p>&copy; {new Date().getFullYear()} Peter Aluya</p>
      </footer>
    </div>
  );
}
export default App;
