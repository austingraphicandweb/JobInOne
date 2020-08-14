import React from 'react';
import './footer.css';
import logo from '../footer/logo.png';
export default function nav() {
  return (
    <div className="footer">
        <img src={logo} alt="Logo" className="logo" />
    </div>
  );
}