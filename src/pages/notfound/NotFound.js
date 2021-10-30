import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  return (
       <div className=" container navStyle mb-5">
    <img className="img-fluid" src="https://i.ibb.co/JtfVZKL/Na-June-67.jpg" alt="" />
    <br />
    <NavLink to="/">
    <button>Go Back</button>
    </NavLink>
    </div>
  );
};

export default NotFound;