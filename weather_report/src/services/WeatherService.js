import { useState } from "react";
import { DateTime } from "luxon";
const API_KEY = "59ab8344524acf0471f1877478059ba0";
const BURL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = async (infoType, searchparams) => {
  const url = new URL(BURL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchparams, appid: API_KEY });
  console.log(url);
  return fetch(url).then((res) => res.json());
};

const fromatCurrentWeather = (data) => {
  const {
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed },
    sys: { country, sunrise, sunset },
    name,
    dt,
    weather,
  } = data;
  const { main: details, icon } = weather[0];
  return {
    lon,
    lat,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    speed,
    country,
    sunrise,
    sunset,
    name,
    dt,
    icon,
    details,
  };
};

const formatForcastWeather = (data) => {
  let timezone = data.city.timezone;

  const daily = data.list
    .map((d) => {
      let condition = d.dt_txt.slice(11, 13) === "00";

      if (condition) {
        return {
          title: d.dt_txt.slice(0, 10),
          temp: d.main.temp,
          icon: d.weather[0].icon,
        };
      }
    })
    .filter((item) => item !== undefined);

  let hourly = data.list.slice(1, 6).map((d) => ({
    title: d.dt_txt.slice(11, 16),
    temp: d.main.temp,
    icon: d.weather[0].icon,
  }));

  return { daily, timezone, hourly };
};



const getFormatedData = async (searchparams) => {
  const formatedCurrentWeather = await getWeatherData("weather", searchparams).then(fromatCurrentWeather);

  const formatedForcastWeather = await getWeatherData("forecast",searchparams).then(formatForcastWeather);
  return { ...formatedCurrentWeather, ...formatedForcastWeather };
};
const formatLocalTime = (
  secs,
  zone,
  format = "cccc,dd LLL yyyy' | Local time : 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
const iconUrl=(code)=>`http://openweathermap.org/img/wn/${code}@2x.png`
export default getFormatedData;
export { formatLocalTime,iconUrl};