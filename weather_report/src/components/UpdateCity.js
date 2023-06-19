import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { name } from "../services/Login";

const UpdateCity = () => {
  const [data, setData] = useState({
    city: "",
    temperature: "",
    weather: "",
    windspeed: "",
    humidity: "",
  });
 
  console.log(name)
  const { city } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/weatherdata/data/${city}`, data, {
        maxRedirects: 0, // Disable automatic redirect handling
      });
      console.log("success");
      navigate("/localcities?name="+name);
    } catch (err) {
      if (err.response && err.response.status === 302) {
        const redirectUrl = err.response.headers.location;
        console.log(`Redirecting to: ${redirectUrl}`);
        navigate(redirectUrl);
      } else {
        console.log(err);
      }
    }
  };

  const loadData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/weatherdata/data/${city}`
      );
    } catch (error) {
      setData(error.response.data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className=" flex flex-col justify-center   bg-slate-300 h-screen items-center">
      <h1 className="text-3xl my-6">Update The City</h1>
      <form
        className="w-2/3 flex flex-col shadow-md p-4 bg-gradient-to-br from-lime-200 to-blue-300"
        onSubmit={handleClick}
      >
        <label>City Name :</label>
        <input
          type="text"
          name="city"
          value={data.city}
          onChange={handleChange}
          disabled
        />
        <label>Temperature :</label>
        <input
          type="number"
          name="temperature"
          onChange={handleChange}
          value={data.temperature}
          required
          className="focus:outline-none"
        />
        <label>Weather :</label>
        <input
          type="text"
          className="focus:outline-none"
          name="weather"
          value={data.weather}
          onChange={handleChange}
          required
        />
        <label>Wind Speed :</label>
        <input
          type="number"
          className="focus:outline-none"
          name="windspeed"
          value={data.windspeed}
          onChange={handleChange}
          required
        />
        <label>Humidity :</label>
        <input
          type="number"
          className="focus:outline-none"
          name="humidity"
          value={data.humidity}
          onChange={handleChange}
          required
        />
        <p className="text-center">

<button className=" p-2 my-2  transition hover:scale-125 shadow-lg bg-gradient-to-b from-red-300">Update City</button>
</p>
      </form>
    </div>
  );
};

export default UpdateCity;
