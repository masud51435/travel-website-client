import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../context/UseAuth';
import google from '../../image/google.png';
import './Login.css';

const Login = () => {
  const { signInUseingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory()

  const handleGoogle = () => {
    signInUseingGoogle()
      .then(result => {
        history.push(location.state?.from || '/home');
      })
  }
  return (
    <div id='login' className='container my-5 py-5'>
      <h1>Please login</h1>
      <h6>Login with</h6>
      <img className="google" onClick={handleGoogle} src={google} alt="" />
    </div>
  );
};

export default Login;