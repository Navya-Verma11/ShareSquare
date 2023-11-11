import React from 'react';
//import './App.css'; // Assuming you have an App.css for styling
import '../assets/Home.css';
import Header from './header';

import Footer from './Footer';

function Roundtable() {
  return (
    <div className="app">
      <Header />
      <h1>Roundtable Page</h1>
      <Footer />
    </div>
  );
}

export default Roundtable;
