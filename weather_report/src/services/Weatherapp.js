import UilReact from "@iconscout/react-unicons/icons/uil-react";
import "../App.css";
import TopButton from "../components/TopButton";
import Nav from "../components/nav";
import TimeLocation from "../components/TimeLocation";
import TempDetail from "../components/TempDetail";
import HourForecast from "../components/HourForecast";
import getFormatedData from "../services/WeatherService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Weatherapp = () => {
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState({ q: "kadapa" });
  const [units, setUnits] = useState("metric");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");
  const goCity = () => {
    navigate(`/localcities?name=${name}`);
  };
  const goLogout = () => {
    navigate("/");
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        const data = await getFormatedData({ ...query, units });
        setWeather(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeather(null);
      } finally {
        setLoading(false); // Set loading back to false after fetching data
      }
    };

    fetchData();
  }, [query, units]);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-red-700 flex flex-col">
        Weather Report <span className="text-sm">see latest weather</span>
      </h1>
      <div className="mx-auto max-w-screen-md mt-4 py-5 bg-gradient-to-br from-red-700 to-blue-700 h-fit shadow-xl shadow-gray-400 px-6 rounded-xl">
       
        <h1 className="flex justify-evenly flex-1 text-xl font-bold text-white ">
          <button className="shadow-md p-2 text-blue-300 transition hover:scale-110" onClick={goCity}>
            Local cities
          </button>
          <h1>Hello, {name}!</h1>
          <button className="shadow-md p-2 text-red-500 transition hover:scale-110 " onClick={goLogout}>Log Out</button>
        </h1>
        <hr className="my-4"/>
        <TopButton setQuery={setQuery} />
        <Nav setQuery={setQuery} setUnits={setUnits} units={units} />
        {loading ? (
          <h1 className="text-center text-2xl font-bold text-white">
            Loading...
          </h1> // Display loading state when fetching data
        ) : weather ? (
          <div>
            <TimeLocation weather={weather} />
            <TempDetail weather={weather} />
            <HourForecast title="Hourly Forecast" items={weather.hourly} />
            <HourForecast title="Daily Forecast" items={weather.daily} />
          </div>
        ) : (
          <h1>Data not found</h1>
        )}
      </div>
    </div>
  );
};

export default Weatherapp;
