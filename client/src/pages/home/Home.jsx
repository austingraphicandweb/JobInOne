import React from 'react';
import './home.css';

function Home() {
    return (
        <div className="homeBackground">
            <div className="content">
            <h1 className="text head">JobInOne</h1>
            <h3 className="text subhead"><i>Where will you go next?</i></h3>
            <div className="buttons">
                <button href="/add" className="btn">Start adding jobs</button>
                <button href="/saves" className="btn">View previously added jobs</button>
                </div>
            </div>

        </div>
    );
}

export default Home;