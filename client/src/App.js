import React from 'react';
import './App.css';
import Search from './pages/Search';
import Nav from './components/Nav/nav';

function App() {
  return (
   <div className="appDiv">
    <Nav />
    <Search />
    </div>
  );
}

export default App;
