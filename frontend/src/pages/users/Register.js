// Resgister.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [role, setRole] = useState('student'); // 기본값 설정
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Request data:", {
      email,
      password1,
      password2,
      role,
    });

    if (password1 !== password2) {
      alert("Passwords don't match");
      return;
    }
    try {
      await axios.post('http://localhost:8000/users/signup/', { email, password1, password2, role });
      alert('Registration successful. Please login.');
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="main-w3layouts wrapper">
      <h1>Sign Up</h1>
      <div className="main-agileinfo">
        <div className="agileits-top">
          <form onSubmit={handleSubmit}>
            <input
              className="text"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="text"
              type="password"
              name="password1"
              placeholder="Password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              required
            />
            <input
              className="text w3lpass"
              type="password"
              name="password2"
              placeholder="Confirm Password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
            {/* Role 선택 드롭다운 */}
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
            </select>
            <input type="submit" value="SIGNUP" />
          </form>
          <p>
            Already have an account? <Link to="/login">Login Now!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
