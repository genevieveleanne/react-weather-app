import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.currentDate.getDay()];

  let hours = props.currentDate.getHours();
  hours = hours % 12 || 12;

  /* if (hours === 0) {
    hours = 12; 
  } */

  let minutes = props.currentDate.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours === 0 || hours < 12) {
    return (
      <div className="FormattedDate">
        {day} {hours}:{minutes} AM
      </div>
    );
  }
  if (hours >= 12) {
    return (
      <div className="FormattedDate">
        {day} {hours}:{minutes} PM
      </div>
    );
  }
}
