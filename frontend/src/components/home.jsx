// App.js
import React from 'react';
//import './App.css'; // Assuming you have an App.css for styling
import Header from './header';
import MainContent from './maincontent';
import Footer from './Footer';
//import '../assets/home.css';

function Home({ isLoggedIn }) {
  return (
    <div className="app">
      <Header />
      {
        isLoggedIn ? <MainContent /> : <h1>Please Login</h1>
      }

      <Footer />
    </div>
  );
}

export default Home;
