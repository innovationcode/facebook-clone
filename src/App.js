import React from 'react';
import Header from './components/header/Header.js';
import Sidebar from './components/sidebar/Sidebar.js';
import Feed from './components/feed/Feed.js';
import Widgets from './components/widgets/Widgets.js';
import Login from './components/login/Login.js';

import './App.css';

function App() {
  const user = null;

  return (
    <div className="app">
      {!user ? 
          ( <Login /> ) : 
          ( <>
            <Header />

            <div className = "app-body">
                <Sidebar />
                <Feed />
                <Widgets />
            </div>
            </>
          )
      }
    </div>
  );
}

export default App;
