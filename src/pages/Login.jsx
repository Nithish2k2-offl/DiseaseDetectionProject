import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import './Login.css'; // Import your CSS file for styling

const Login = ({ setToken }) => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  

  console.log(formData);
  

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      });

      if (error) throw error;
      console.log(data);
      setToken(data);
      navigate('/homepage');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="login-container">
      <h1 id='login-heading'>Login</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          className="input-field"
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <br></br>
        <br />
        <hr></hr>
        <br />
        <br />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <br></br>
      <hr />
      <p className="signup-link">
        Don't have an account?... Just  <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
