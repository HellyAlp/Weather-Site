import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getWeather from "../redux/Action";
import getForecast from "../redux/Action";

import Footer from "./Footer";
import Header from "./Header";
import Details from "./Details";
import Cards from "./Cards";
import Main from "./Main";
import { getData, getSuccess } from "../redux/Selectors";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const data = useSelector(getData);
  const success = useSelector(getSuccess);

  const today = data && data.list && data.list.length > 0 ? data.list[0] : null;
  const location = data && data.list && data.list.length > 0 ? data.city : null;
  const dayTwo =
    data && data.list && data.list.length > 0 ? data.list[1] : null;
  const dayThree =
    data && data.list && data.list.length > 0 ? data.list[2] : null;
  const dayFour =
    data && data.list && data.list.length > 0 ? data.list[2] : null;

  console.log(today);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (city) {
      dispatch(getForecast(city));
    }
    setCity("");
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  useEffect(() => {
    dispatch(getForecast());
  }, [getForecast]);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="location">
          <p>
            Discover the weather for any city in the world, right at your
            fingertips{" "}
            <span role="img" aria-label="Globe">
              🌎
            </span>
          </p>
          <form className="search" onSubmit={handleSubmit}>
            <input
              type="text"
              id="City"
              name="City"
              placeholder="Search Weather by city"
              onChange={handleChange}
              value={city}
            ></input>
            <button>
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <Main
          success={success}
          sys={location}
          main={today.main}
          weather={today.weather}
          name={location.name}
        />
        <Details
          feelsLike={success ? today.main.feels_like : null}
          minTemp={success ? today.main.temp_min : null}
          maxTemp={success ? today.main.temp_max : null}
          pressure={success ? today.main.pressure : null}
          humidity={success ? today.main.humidity : null}
        />

        <Cards
          success={success}
          dayTwo={dayTwo}
          dayThree={dayThree}
          dayFour={dayFour}
        />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Weather;
