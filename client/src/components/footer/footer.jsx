import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './footer.css';
import logo from '../footer/logo.png';
export default function nav() {
  return (
    <div className="footer">
        <img src={logo} alt="Logo" className="logo" />
    </div>
  );
}