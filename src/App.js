import React from 'react';
import Header from './components/header/Header.js';
import Sidebar from './components/sidebar/Sidebar.js';
import Feed from './components/feed/Feed.js';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* <h1> Facebook clone ........</h1> */}
      <Header />

      <div className = "app-body">
          <Sidebar />
          <Feed />
      </div>
    </div>
  );
}

export default App;
