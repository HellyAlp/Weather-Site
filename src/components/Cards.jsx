import React from "react";
import moment from "moment";

function Cards(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <p className="card-text">
            {props.success ? moment().add(1, "day").format("DD/MM") : null}

            <br />
            <span>{props.dayTwo.main.temp} °C</span>
            <img
              src={
                props.dayTwo.weather &&
                props.dayTwo.weather.length > 0 &&
                props.dayTwo.weather[0].icon
                  ? `http://openweathermap.org/img/wn/${props.dayTwo.weather[0].icon}@2x.png`
                  : ""
              }
              alt="current temp status"
            />
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <p className="card-text">
            {props.success ? moment().add(2, "day").format("DD/MM") : null}

            <br />
            <span>{props.dayThree.main.temp} °C</span>
            <img
              src={
                props.dayThree.weather &&
                props.dayThree.weather.length > 0 &&
                props.dayThree.weather[0].icon
                  ? `http://openweathermap.org/img/wn/${props.dayThree.weather[0].icon}@2x.png`
                  : ""
              }
              alt="current temp status"
            />
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <p className="card-text">
            {props.success ? moment().add(3, "day").format("DD/MM") : null}
            <br />
            <span>{props.dayFour.main.temp} °C</span>
            <img
              src={
                props.dayFour.weather &&
                props.dayFour.weather.length > 0 &&
                props.dayFour.weather[0].icon
                  ? `http://openweathermap.org/img/wn/${props.dayFour.weather[0].icon}@2x.png`
                  : ""
              }
              alt="current temp status"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
