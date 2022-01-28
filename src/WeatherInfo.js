import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import FormattedSunrise from "./FormattedSunrise";

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
            <WeatherIcon iconData={props.data.icon} />
            <Temperature fahrenheit={props.data.temperature} />
          </div>
        </div>

        <div className="col-6 mt-3">
          <ul className="text-center additionalWeather">
            <li>
              <em>Humidity:</em>{" "}
              <span className="weatherInfo">{props.data.humidity}%</span>
            </li>
            <li>
              <em>Wind:</em>{" "}
              <span className="weatherInfo">
                {Math.round(props.data.wind)} mph
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-6 text-center additionalWeather">
          <ul>
            <li>
              <em>High:</em>{" "}
              <span className="weatherInfo">
                {Math.round(props.data.high)}°
              </span>
            </li>
            <li>
              <em>Low:</em>{" "}
              <span className="weatherInfo">{Math.round(props.data.low)}°</span>
            </li>
          </ul>
        </div>

        <div className="col-6 text-center additionalWeather">
          <FormattedSunrise
            currentSunrise={props.data.sunrise}
            currentSunset={props.data.sunset}
          />
        </div>
      </div>
    </div>
  );
}
