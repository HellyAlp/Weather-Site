import React from "react";
import "../../src/styles.css";
import moment from "moment";

function Main(props) {
  return (
    <div className="main-info">
      <p>
        Weather Forecast on{" "}
        {props.success ? moment().format("DD/MM/YYYY") : null}
        <br />
        <span>
          {props.success ? props.name : null} (
          {props.success ? props.sys.country : null})
        </span>
      </p>

      <h1> {props.success ? props.main.temp : null} °C</h1>
      <img
        className="wether-icon"
        src={
          props.weather && props.weather.length > 0 && props.weather[0].icon
            ? `http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`
            : ""
        }
        alt="current temp status"
      />
      <p className="description">
        {" "}
        {props.success ? props.weather[0].main : null}
      </p>
    </div>
  );
}

export default Main;
