import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddLocation.css';

const AddLocation = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    axios.post('https://morning-beyond-17054.herokuapp.com/places', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('location added successfully')
          reset();
        }
      })
  };


  return (
    <div className='add-location my-5'>
      <h1 style={{ fontFamily: "Segoe Script", color: "#E96957" }}>add New location</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Enter Your Name" {...register("name", { required: true, maxLength: 20 })} />
        <textarea placeholder="Enter Your Title" {...register("title")} />
        <input placeholder="Enter Your Review" {...register("review")} />
        <input placeholder="Enter your URL" {...register("img")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddLocation;