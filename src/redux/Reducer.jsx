import {
  WEATHER_LOADING,
  WEATHER_SUCCESS,
  WEATHER_FAILURE
} from "../components/Constants";

const InitialState = {
  loading: false,
  error: false,
  success: false,
  data: {}
};

export const WeatherReducer = (state = InitialState, action) => {
  const { type } = action;
  switch (type) {
    case WEATHER_LOADING:
      return {
        ...state,
        loading: true
      };
    case WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload
      };
    case WEATHER_FAILURE:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};
