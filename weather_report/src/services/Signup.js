import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [user, setUser] = React.useState({
    "name": "",
    "email": "",
    "password": ""
  });
  const [conformpassword,setConformpassword]=useState("");
  const navigate=useNavigate();
  const handleSubmit= async(e)=>{
  if (user.password===conformpassword) {
      e.preventDefault();
      await axios.post("http://localhost:8080/Accounts/Users",user);
      console.log("success")
      alert("Account Created Successfully");
      navigate("/login", { replace: true });
    }
    
   else {
     e.preventDefault();
    alert("Password Missmatching");
  }}
  const handleChange= (e)=>{
    const {name,value}= e.target;
    setUser((pre)=>({...pre,[name]:value}));

  }
  console.log(conformpassword)
  return (
    <div className="h-screen flex justify-center items-center bg-green-200">
     
        <form className="flex flex-col items-center justify-around bg-gradient-to-tr from-green-400 to-orange-400 w-1/2 h-1/2 shadow-xl rounded-xl py-7" onSubmit={handleSubmit}>
        <h1 className="text-2xl text-lime-900">SIGN UP</h1>
          
        <div className="flex flex-col justify-around h-10 px-9">
          <label>Name : </label>
          <input type="text" className="focus:outline-none" name="name" onChange={handleChange} required/>
        </div>
        <div className="flex flex-col justify-around h-10">
          <label>Email : </label>
          <input type="email" className="focus:outline-none" name="email" onChange={handleChange} required/>
        </div>
        <div className="flex flex-col justify-around h-10">
          <label>Password : </label>
          <input type="password" className="focus:outline-none" name="password" onChange={handleChange} required/>
        </div>
        <div className="flex flex-col justify-around h-10">
          <label >Conform Password : </label>
          <input type="password" className="focus:outline-none" required onChange={(e)=>setConformpassword(e.target.value)}/>
        </div>
        <button className="bg-red-400 p-2 rounded-md transition hover:scale-110">Create Account</button>
        </form>
      </div>
    
  );
};

export default Signup;
