import { createSelector } from "reselect";

const selectWeatherData = (state) => state.WeatherReducer.data;
const selectWeatherSuccess = (state) => state.WeatherReducer.success;

export const getData = createSelector([selectWeatherData], (data) => data);

export const getSuccess = createSelector(
  [selectWeatherSuccess],
  (success) => success
);
