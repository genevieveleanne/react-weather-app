import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecastData.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.forecastData.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="ForecastDay">{day()}</div>
      <div className="ForecastIcon">
        <WeatherIcon iconData={props.forecastData.weather[0].icon} size={36} />
      </div>
      <div className="ForecastTemp">
        {maxTemperature()} <span className="MinTemp">{minTemperature()}</span>
      </div>
    </div>
  );
}
