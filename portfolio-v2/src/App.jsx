import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Articles from './components/Articles';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="container">
      {/* This nav block is the parent container for our horizontal layout */}
      <nav className="top-nav">
        <Header />

        <button className="theme-toggle-btn" onClick={toggleTheme}>
          <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
        </button>
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
