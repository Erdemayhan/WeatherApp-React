/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import React from "react";
import moment from "moment";

function ForecastDetails({ forecasts }) {
  return (
    <div className="forecast-details">
      <h1>Details</h1>
      <div className="forecast-details_date">
        {moment(forecasts.date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details_temperature">
        {" "}
        Max Temp :{forecasts.temperature.max}&deg;C
      </div>
      <div className="forecast-details_temperature">
        {" "}
        Min Temp :{forecasts.temperature.min}&deg;C
      </div>
      <div className="forecast-details_humidity">
        Humidity at: {forecasts.humidity}%
      </div>
      <div className="forecast-details_wind">
        Wind Speed at : {forecasts.wind.speed}mph
      </div>
      <div className="forecast-details_description">
        {" "}
        Weather is :{forecasts.description}
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }).isRequired,
    }),
  ).isRequired,
};

export default ForecastDetails;
