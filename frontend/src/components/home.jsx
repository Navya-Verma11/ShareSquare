// App.js
import React from 'react';
//import './App.css'; // Assuming you have an App.css for styling
import '../assets/Home.css';
import Header from './header';
import MainContent from './maincontent';
import Footer from './Footer';

function Home() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Home;
