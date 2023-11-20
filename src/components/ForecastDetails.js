import PropTypes from "prop-types";
import React from "react";
import moment from "moment";

function ForecastDetails({ date, temperature, humidity, wind, description }) {
  return (
    <div className="forecast-details">
      <h1>Details</h1>
      <div className="forecast-details_date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details_temperature">{temperature}&deg;C</div>
      <div className="forecast-details_humidity">{humidity}%</div>
      <div className="forecast-details_wind">{wind}mph</div>
      <div className="forecast-details_description">{description}</div>
    </div>
  );
}

// Common Errors: Failed PropType. None of the props within the forecastDetails are being passed, their value is read as undefined

ForecastDetails.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.number,
    direction: PropTypes.string,
  }).isRequired,
  description: PropTypes.string.isRequired,
};

export default ForecastDetails;
