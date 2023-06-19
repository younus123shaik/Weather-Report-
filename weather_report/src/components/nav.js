import React, { useState, useEffect } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const Nav = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      setQuery({ q: city });
    }
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude: lat, longitude: lon } = position.coords;
        setQuery({ lat, lon });
      });
    }
  };

  const handleUnitChange = (newUnits) => {
    setUnits(newUnits);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }); // Empty dependency array to ensure the event listener is added only once

  return (
    <div className="flex flex-row justify-center m-5">
      <div className="flex flex-row w-3/4 justify-center items-center space-x-4">
        <input
          type="text"
          className="text-xl font-light w-full p-2 shadow-xl focus:outline-none capitalize placeholder:lowercase"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearch}
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocation}
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          onClick={() => handleUnitChange("metric")}
          className={`text-white font-light text-xl transition ease-out hover:scale-125 ${
            units === "metric" ? "font-bold" : ""
          }`}
        >
          °C
        </button>
        <p className="text-white text-xl mx-1">|</p>
        <button
          onClick={() => handleUnitChange("imperial")}
          className={`text-white font-light text-xl transition ease-out hover:scale-125 ${
            units === "imperial" ? "font-bold" : ""
          }`}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Nav;
