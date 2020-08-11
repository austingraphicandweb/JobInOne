import React from 'react';
import Search from './pages/Search';
import Nav from './components/Nav/nav';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
   <div className="appDiv">
    <Nav />
    <Route exact path='/' component={Search} />
    <Footer />
    </div>
    </Router>
  );
}

export default App;
