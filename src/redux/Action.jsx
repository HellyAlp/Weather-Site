import {
  WEATHER_LOADING,
  WEATHER_SUCCESS,
  WEATHER_FAILURE,
  BASE_URL,
  FORECAST_URL
} from "../components/Constants";
import axios from "axios";
import { toast } from "react-toastify";

const getWeather = (location = "Tel aviv") => async (dispatch) => {
  dispatch({ type: WEATHER_LOADING });
  axios
    .get(FORECAST_URL, {
      params: { q: location, units: "Metric", lang: "en" }
    })
    .then((response) =>
      dispatch({ type: WEATHER_SUCCESS, payload: response.data })
    )
    .catch((err) => {
      console.log(err.response, err);
      toast.error(err.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false
      });

      dispatch({ type: WEATHER_FAILURE, payload: err.response });
    });
};

export const getForecast = (location = "Tel aviv") => async (dispatch) => {
  dispatch({ type: WEATHER_LOADING });
  axios
    .get(FORECAST_URL, {
      params: { q: location, units: "Metric", lang: "en" }
    })
    .then((response) =>
      dispatch({ type: WEATHER_SUCCESS, payload: response.data })
    )
    .catch((err) => {
      console.log(err.response, err);
      toast.error(err.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false
      });

      dispatch({ type: WEATHER_FAILURE, payload: err.response });
    });
};

export default getWeather;
