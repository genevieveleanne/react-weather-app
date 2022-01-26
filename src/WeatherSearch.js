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

      <div className="text-center">
        <h1>Las Vegas</h1>
        <ul className="dateAndDescription">
          <li>Tuesday 5:00</li>
          <li>Sunny</li>
        </ul>
      </div>

      <div className="row mt-4">
        <div className="col-6">
          <span className="temperature">75</span>
          <span className="units">°F</span>
        </div>

        <div className="col-6 mt-3">
          <ul className="text-center additionalWeather">
            <li>
              <em>Humidity:</em> 7%
            </li>
            <li>
              <em>Wind:</em> 5 mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
