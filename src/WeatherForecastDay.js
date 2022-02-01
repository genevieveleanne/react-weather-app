import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div className="WeatherForecastDay">
      <div className="ForecastDay">Sun</div>
      <div className="ForecastIcon">
        <WeatherIcon iconData={props.forecastData.weather[0].icon} size={36} />
      </div>
      <div className="ForecastTemp">
        {props.forecastData.temp.max}°
        <span className="MinTemp">{props.forecastData.temp.min}°</span>
      </div>
    </div>
  );
}
