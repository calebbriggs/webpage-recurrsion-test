import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [html, setHtml] = useState('<h1>...Loading Content</h1>');
  async function fetchgoogle() {
    var res = await fetch('http://localhost:3010?page=https://www.lipsum.com/');
    var page = await res.text();
    setHtml(page);
  }
  useEffect(() => {
    fetchgoogle();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>Recurrsion script</p>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </header>
    </div>
  );
}

export default App;
