import React from "react";
import WeatherSearch from "./WeatherSearch";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherSearch />
      </div>
      <footer>
        This app was built by{" "}
        <a
          href="https://trusting-curie-946ae6.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Genevieve Leanne Dominguez
        </a>
        . It is open-sourced on{" "}
        <a
          href="https://github.com/genevieveleanne/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </footer>
    </div>
  );
}
