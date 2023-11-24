/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import "../styles/App.css";
import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import LocationDetails from "./locationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../Requests/GetForecast";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  
  const handleForecastSelect = (date) => {
    // eslint-disable-next-line no-console
    console.log(date)
    setSelectedDate(date);
  };

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
     {selectedForecast && (<ForecastDetails forecast={selectedForecast} />)}
    </div>
  );
}

// In React, component names MUST START WITH CAPITAL LETTERS

export default App;
