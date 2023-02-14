import React from "react";
import Weather from "./components/Weather";
import Store from "./redux/Store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={Store}>
      <Weather />
    </Provider>
  );
};

export default App;
