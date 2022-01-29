import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Sun</div>
          <div className="ForecastIcon">
            <WeatherIcon iconData={"01d"} size={36} />
          </div>
          <div className="ForecastTemp">
            62° <span className="MinTemp">39°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
