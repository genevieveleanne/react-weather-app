import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedSunrise from "./FormattedSunrise";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="text-center">
        <h1>{props.data.city}</h1>
        <ul className="dateAndDescription">
          <li>
            <FormattedDate currentDate={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>

      <div className="row mt-4">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
            />

            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="units">°F</span>
          </div>
        </div>

        <div className="col-6 mt-3">
          <ul className="text-center additionalWeather">
            <li>
              <em>Humidity:</em> {props.data.humidity}%
            </li>
            <li>
              <em>Wind:</em> {Math.round(props.data.wind)} mph
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <ul>
            <li>High: {Math.round(props.data.high)}°</li>
            <li>Low: {Math.round(props.data.low)}°</li>
          </ul>
        </div>

        <div className="col-6">
          <FormattedSunrise
            currentSunrise={props.data.sunrise}
            currentSunset={props.data.sunset}
          />
        </div>
      </div>
    </div>
  );
}
