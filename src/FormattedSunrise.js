import React from "react";

export default function FormattedSunrise(props) {
  let sunriseHours = props.currentSunrise.getHours();
  let sunriseMinutes = props.currentSunrise.getMinutes();

  if (sunriseMinutes < 10) {
    sunriseMinutes = `0${sunriseMinutes}`;
  }

  let sunsetHours = props.currentSunset.getHours();
  let sunsetMinutes = props.currentSunset.getMinutes();

  if (sunsetMinutes < 10) {
    sunsetMinutes = `0${sunsetMinutes}`;
  }

  return (
    <div className="FormattedSunrise">
      <ul>
        <li>
          <em>Sunrise:</em> {sunriseHours}:{sunriseMinutes}
        </li>
        <li>
          <em>Sunset:</em> {sunsetHours}:{sunsetMinutes}
        </li>
      </ul>
    </div>
  );
}
