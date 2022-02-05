import React from "react";

export default function FormattedSunrise(props) {
  let sunriseHours = props.currentSunrise.getHours();
  sunriseHours = sunriseHours % 12 || 12;

  let sunriseMinutes = props.currentSunrise.getMinutes();

  if (sunriseMinutes < 10) {
    sunriseMinutes = `0${sunriseMinutes}`;
  }

  let sunsetHours = props.currentSunset.getHours();
  sunsetHours = sunsetHours % 12 || 12;

  let sunsetMinutes = props.currentSunset.getMinutes();

  if (sunsetMinutes < 10) {
    sunsetMinutes = `0${sunsetMinutes}`;
  }

  return (
    <div className="FormattedSunrise">
      <ul>
        <li>
          <em>Sunrise:</em>{" "}
          <span className="weatherInfo">
            {sunriseHours}:{sunriseMinutes} AM
          </span>
        </li>
        <li>
          <em>Sunset:</em>{" "}
          <span className="weatherInfo">
            {sunsetHours}:{sunsetMinutes} PM
          </span>
        </li>
      </ul>
    </div>
  );
}
