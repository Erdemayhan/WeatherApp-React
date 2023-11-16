/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import WeatherIcon from "react-icons-weather";

function WeatherComponent() {
  return (
    <div>
      <WeatherIcon name="owm" iconId="200" flip="horizontal" rotate="90" />
    </div>
  );
}

export default WeatherComponent;
