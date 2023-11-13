
import '../assets/login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
//import Header from './header';
//import Footer from './Footer';

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = await axios.post('http://localhost:8000/user/login', {
        email,
        password,
      });

      const token = response.data.token;
      console.log(token);
      Cookies.set('jwtToken', token);
      console.log(typeof (setIsLoggedIn));
      setIsLoggedIn(true);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  return (
    <>
      {/* <Header /> */}

      <div className="form-wrapper">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <input type="text" required value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <label>Email or phone number</label>
          </div>
          <div className="form-control">
            <input type="password" required value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <label>Password</label>
          </div>
          <button type="submit">Login</button>
          <div className="form-help">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="#">Need help?</a>
          </div>
        </form>
        <p>New to ShareSquare? <a href="Signup.html">Sign up now</a></p>
        <small>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <a href="#">Learn more.</a>
        </small>
      </div>

      {/* <Footer />   */}
    </>
  );
}

export default Login;
