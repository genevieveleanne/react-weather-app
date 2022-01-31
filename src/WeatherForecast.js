import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "1d92aebec33d3d8890c4cc40ed26f1eb";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

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
