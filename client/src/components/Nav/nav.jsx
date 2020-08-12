import React from 'react';
import '../Nav/nav.css';

export default function SimpleTabs() {
  return (
    <div>
      <div className="nav">
        <a className="active" href="#home">Add</a>
        <a href="#news">List</a>
      </div>
    </div>
  );
}