import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { name } from "../services/Login";
const AddCity = () => {
  const [data, setData] = useState({
    city: "",
    temperature: "",
    weather: "",
    windspeed: "",
    humidity: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/weatherdata/data", data);
      console.log("success");
      navigate("/localcities?name="+name);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" flex flex-col justify-center   bg-gradient-to-bl from-violet-300 to-pink-300 h-screen items-center">
      <h1 className="text-3xl my-6">Add New City</h1>
      <form
        className="w-2/3 flex flex-col shadow-md p-4 bg-gradient-to-br from-teal-300 to-blue-300"
        onSubmit={handleClick}
      >
        <label>City Name :</label>
        <input
          type="text"
          name="city"
          className="focus:outline-none"
          onChange={handleChange}
          required
        />
        <label>Temperature :</label>
        <input
          type="number"
          name="temperature"
          className="focus:outline-none"
          onChange={handleChange}
          required
        />
        <label>Weather :</label>
        <input
          type="text"
          name="weather"
          className="focus:outline-none"
          onChange={handleChange}
          required
        />
        <label>Wind Speed :</label>
        <input
          type="number"
          name="windspeed"
          className="focus:outline-none"
          onChange={handleChange}
          required
        />
        <label>Humidity :</label>
        <input
          type="number"
          name="humidity"
          className="focus:outline-none"
          onChange={handleChange}
          required
        />
        <p className="text-center">

        <button className=" p-2 my-2  transition hover:scale-125 shadow-lg bg-gradient-to-b from-red-300">Add City</button>
        </p>
      </form>
    </div>
  );
};

export default AddCity;
