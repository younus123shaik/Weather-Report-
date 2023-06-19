import React from "react";
import {
  UilArrowUp,
  UilTemperature,
  UilWind,
  UilTear,
  UilSun,
  UilSunset
} from "@iconscout/react-unicons";
import { formatLocalTime, iconUrl } from "../services/WeatherService";
const TempDetail = ({weather : {details,icon,temp,temp_min,temp_max,humidity,speed,sunrise,sunset,feels_like,timezone,clouds}}) => {
  return (
    <>
      <div className="flex items-center justify-center ">
        <p className=" font-light text-cyan-400 py-6">{details}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3 mx-6 mb-10">
        <img src={iconUrl(icon)} className="w-20" alt="cloudy" />
        <p className=" font-light text-5xl "> {`${parseInt(temp).toFixed()}°`}</p>
        <div>
          <div className="flex font-light  ">
            <UilTemperature className="text-2xl mr-2" />
            Real feal :<span className="font-medium ml-1">{`${parseInt(feels_like).toFixed()}°`}</span>
          </div>
          <div className="flex font-light  ">
            <UilTear className="text-2xl mr-2" />
            Humidity :<span className="font-medium ml-1">{`${parseInt(humidity).toFixed()}%`}</span>
          </div>
          <div className="flex font-light  ">
            <UilWind className="text-2xl mr-2" />
            Wind :<span className="font-medium ml-1">{`${parseInt(speed).toFixed()}km/h`}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white py-3  ">
        <UilSun/>
        <p className="font-light">Rise : <span className="font-medium ml-1">{formatLocalTime(parseInt(sunrise),parseInt(timezone),"hh:mm ")} AM</span></p>
        <p className="font-light">|</p>
        <UilSunset/>
        <p className="font-light">Set : <span className="font-medium ml-1">{formatLocalTime(parseInt(sunset),parseInt(timezone),"hh:mm ")} PM</span></p>
        <p className="font-light">|</p>
        <UilSun/>
        <p className="font-light">High : <span className="font-medium ml-1">{`${parseInt(temp_max).toFixed()}°`}</span></p>
        <p className="font-light">|</p>
        <UilSun/>
        <p className="font-light">Low: <span className="font-medium ml-1">{`${parseInt(temp_min).toFixed()}°`}</span></p>
      </div>
    </>
  );
};

export default TempDetail;
