import React from "react";
import "./WeatherSearch.css";

export default function WeatherSearch() {
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

      <div className="CityDateDescription text-center">
        <h1>Las Vegas</h1>
        <ul>
          <li>Tuesday 5:00</li>
          <li>Sunny</li>
        </ul>
      </div>

      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Weather icon"
          />
          75°F
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 7%</li>
            <li>Wind: 5 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
