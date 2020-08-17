import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav/nav';
import Home from './pages/home/Home';
import Add from './pages/addJob/Add';
import Saves from './pages/saves/Saves';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
    <Nav />
    <Route exact path='/' component={Home} />
    <Route exact path='/Add' component={Add} />
    <Route exact path='/saves' component={Saves} />
    <Footer />
    </Router>   
  );
}

export default App;
