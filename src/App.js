import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>welcome to my app</h3>
          <p>adding more stuff</p>
          {/* git add -A
          git commit -m "added more stuff"
          npm run deploy */}
        </a>
      </header>
    </div>
  );
}

export default App;
