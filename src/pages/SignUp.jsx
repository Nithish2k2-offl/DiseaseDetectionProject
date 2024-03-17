import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';

const SignUp = () => {

  const [formData, setFormData] = useState({
    fullName: '', email: '', password: ''
  })

  console.log(formData)

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }

    })

  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.fullName,
            }
          }
        }
      )
      if (error) throw error
      alert('Check your email for verification link')


    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          placeholder='Fullname'
          name='fullName'
          onChange={handleChange}
        />

        <input
          className="input-field"
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />

        <input
          className="input-field"
          placeholder='Password'
          name='password'
          type="password"
          onChange={handleChange}
        />

        <button className="submit-button" type='submit'>
          Submit
        </button>
      </form>

      <p>Already have an account? <Link to='/'>Login</Link></p>
    </div>
  );

}

export default SignUp