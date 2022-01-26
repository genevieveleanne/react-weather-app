import React, { useState } from "react";
import axios from "axios";

import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 07:00",
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherSearch">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City..."
                autoFocus="true"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <div className="text-center">
          <h1>{props.cityOnLoad}</h1>
          <ul className="dateAndDescription">
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
        </div>

        <div className="row mt-4">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />

              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">°F</span>
            </div>
          </div>

          <div className="col-6 mt-3">
            <ul className="text-center additionalWeather">
              <li>
                <em>Humidity:</em> {weatherData.humidity}%
              </li>
              <li>
                <em>Wind:</em> {weatherData.wind} mph
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1d92aebec33d3d8890c4cc40ed26f1eb";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.cityOnLoad}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayResponse);

    return (
      <div className="WeatherSearch">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City..."
                autoFocus="true"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <div className="text-center">
          <h1>{props.cityOnLoad}</h1>
          <ul className="dateAndDescription">
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
        </div>

        <div className="row mt-4">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />

              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">°F</span>
            </div>
          </div>

          <div className="col-6 mt-3">
            <ul className="text-center additionalWeather">
              <li>
                <em>Humidity:</em> {weatherData.humidity}%
              </li>
              <li>
                <em>Wind:</em> {weatherData.wind} mph
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
