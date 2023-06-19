import React from "react";
import { iconUrl } from "../services/WeatherService";

const HourForecast = ({title,items}) => {
  console.log(items)
  return (
    <>
    
      <div className="flex items-center justify-start mt-6 text-white">
        <p className="uppercase font-medium">{title}</p>
      </div>
      <hr className="my-2" />
      <div  className="flex  items-center justify-between mt-6 text-white">

      {items!=null && items.map((item,index)=>(
        
        <div key={index} className="flex flex-col justify-center items-center">
        <p>{item.title}</p>
        <img src={iconUrl(item.icon)} className="w-12 my-1" />
        <p>{`${parseInt(item.temp).toFixed()}°`}</p>
        </div>
      ))}
      </div>
    </>
  );
};

export default HourForecast;
