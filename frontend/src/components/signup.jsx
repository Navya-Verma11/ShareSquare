import React, { useState } from 'react';
import '../assets/signup.css'; // Assuming you have a Signup.css for styling
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/user/signup', {
                name,
                email,
                password,
            });

            navigate('/');
        } catch (error) {
            console.error('Signup error:', error);
        }
    };

    return (
        <>
            <nav>
                <a href="#"><img src="images/logo.svg" alt="logo" /></a>
            </nav>
            <div className="form-wrapper">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="form-control">
                        <input type="text" id="name" required value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="name">Full Name</label>
                    </div>
                    <div className="form-control">
                        <input type="email" id="email" required value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-control">
                        <input type="password" id="password" required value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </>
    );
};

export default Signup;
