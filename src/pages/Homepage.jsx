import React from 'react'
import { useNavigate } from 'react-router-dom'
import PredictForm from 'C:/Users/nith/Desktop/sample1/src/components/PredictForm.jsx';

const Homepage = ({token}) => {
  let navigate = useNavigate()
  
  function handleLogout(){
    sessionStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className="App">
      <h1 id="title" >REMOTE PLANT DISEASE DIAGNOSIS</h1>
      <br></br>
      <PredictForm />
    </div>
  )
}

export default Homepage