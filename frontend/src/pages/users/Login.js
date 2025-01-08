// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ setIsLoggedIn, setUserEmail }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await axios.post('http://localhost:8000/users/login/', { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );


      console.log(response.data);
      
      localStorage.setItem('token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      localStorage.setItem('userId', response.data.user_id?.toString());
      
      setIsLoggedIn(true);
      setUserEmail(email);
      
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please check your credentials.');
    }
  };
  

  return (
    <div className="wrapper">
      <div className="title"><span>Login Form</span></div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <i className="fas fa-user"></i>
          <input
            type="email"
            placeholder="Email or Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="row">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="pass">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
        <div className="row button">
          <input type="submit" value="Login" />
        </div>
        <div className="signup-link">
          Not a member? <Link to="/signup">Signup now</Link>
        </div>
      </form>
    </div>
  );
  
};

export default Login;
