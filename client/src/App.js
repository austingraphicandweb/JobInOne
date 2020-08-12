import React from 'react';

import Nav from './components/Nav/nav';
import Footer from './components/footer/footer';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Saves from './pages/saves/Saves';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
    <Nav />
    <Router>
    <Route exact path='/home' component={Home} />
    <Route exact path='/search' component={Search} />
    <Route exact path='/saves' component={Saves} />
    </Router>    
    <Footer />
    </div>
  );
}

export default App;
