import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './footer.css';

export default function nav() {
  return (
    <div className="footer">
        <FontAwesomeIcon icon={faPlus} size="3x" />
    </div>
  );
}