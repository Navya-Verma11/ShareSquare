import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Resources from './components/resources';
import Collab from './components/Collab';
import Opportunities from './components/opportunities';
import Blogs from './components/blogs';
import Roundtable from './components/roundtable';
import Login from './components/login';
import Signup from './components/signup';
import './assets/Home.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home isLoggedIn={isLoggedIn} />} />
          <Route exact path='/resources' element={<Resources />} />
          <Route exact path='/collab' element={<Collab />} />
          <Route exact path='/opportunities' element={<Opportunities isLoggedIn={isLoggedIn} />} />
          <Route exact path='/blogs' element={<Blogs />} />
          <Route exact path='/roundtable' element={<Roundtable />} />
          <Route exact path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route exact path='/signup' element={<Signup />} />
          {/* <Route exact path='/create' element={<Create isLoggedIn={isLoggedIn}/>}/>
          <Route exact path='/login' element={<Login setIsLoggedIn={ setIsLoggedIn }/>} /> */}
          {/* <Route exact path='/signup' element={<Signup />} /> */}
        </Routes>

      </BrowserRouter>
    </>
  )
}
export default App