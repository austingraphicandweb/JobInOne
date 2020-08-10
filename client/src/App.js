import React from 'react';
import Search from './pages/Search';
import Nav from './components/Nav/nav';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
   <div className="appDiv">
    <Nav />
    <Search />
    <Footer />
    </div>
  );
}

export default App;
