import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [html, setHtml] = useState('<h1>...Loading Content</h1>');
  async function fetchgoogle() {
    // const res = await fetch('http://localhost:3010?page=https://www.lipsum.com/');
    // const page = await res.text();
    // setHtml(page);
  }
  useEffect(() => {
    fetchgoogle();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>Recurrsion script</p>
      </header>
    </div>
  );
}

export default App;
