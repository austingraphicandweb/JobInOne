import React from "react";
import {Link} from 'react-router-dom';
import "./home.css";
function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1 className="text head">JobInOne</h1>
        <h3 className="text subhead">
          <i>Where will you go next?</i>
        </h3>
      </div>
      <div className="buttons">
        <Link to="/Add"><button className="buttonHome">Add a job</button></Link>
        <Link to="/Saves"><button className="buttonHome">View saved jobs</button></Link>
      </div>
    </div>
  );
}

export default Home;
