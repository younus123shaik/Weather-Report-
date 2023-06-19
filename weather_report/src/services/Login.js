import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

let name = '';

const Login = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get(`http://localhost:8080/Accounts/Users/${data.name}`);
    } catch (error) {
      const logdata = error.response.data;
      if (logdata.name === data.name && logdata.email === data.email && logdata.password === data.password) {
        alert('Login Successful');
        navigate(`/weatherapp?name=${data.name}`);
        name = data.name; // Update the name variable
      } else {
        alert('Invalid Credentials');
      }
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  console.log(data);

  return (
    <div className="h-screen flex justify-center items-center bg-red-200">
      <form
        className="flex flex-col items-center justify-around bg-gradient-to-tr from-amber-500 to-slate-500 w-1/2 h-1/2 shadow-xl rounded-xl py-7"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-lime-900">LOG IN</h1>
        <div>
          <label>UserName : </label>
          <input type="text" className="focus:outline-none" name="name" onChange={handleChange} required />
        </div>
        <div>
          <label>email : </label>
          <input type="email" className="focus:outline-none" name="email" onChange={handleChange} required />
        </div>
        <div>
          <label>Password : </label>
          <input type="password" className="focus:outline-none" name="password" onChange={handleChange} required />
        </div>
        <button className="bg-red-400 p-2 rounded-md transition hover:scale-125">Log in</button>
      </form>
    </div>
  );
};

console.log(name);

const LoginName = () => {
  return name;
};

export default Login;
export { LoginName, name };
