import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <span className="Temperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="units">
          °F |
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="Temperature">
        <span className="temperature">{Math.round(celsius())}</span>
        <span className="units">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>{" "}
          | °C
        </span>
      </span>
    );
  }
}
