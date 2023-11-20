/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import "../styles/App.css";
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import LocationDetails from "./locationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App(props) {
  const { forecasts, location } = props;

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} />
      <ForecastDetails forecasts={forecasts[0]} />
    </div>
  );
}

App.propTypes = {
  // propType validation for forecasts data
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    }),
  ).isRequired,

  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

// In React, component names MUST START WITH CAPITAL LETTERS

export default App;
