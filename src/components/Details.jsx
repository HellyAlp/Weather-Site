import React from "react";

function Detailes(props) {
  return (
    <div className="additional-info">
      <ul className="list">
        <li>
          <b>Feels Like:</b> {props.feelsLike}
        </li>
        <li>
          <b>Min Temp:</b> {props.minTemp}
        </li>
        <li>
          <b>Max Temp:</b> {props.maxTemp}
        </li>
        <li>
          <b>Pressure:</b> {props.pressure}
        </li>
        <li>
          <b>Humidity:</b> {props.humidity}
        </li>
      </ul>
    </div>
  );
}

export default Detailes;
