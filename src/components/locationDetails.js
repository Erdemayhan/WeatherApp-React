/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from "prop-types";

function LocationDetails(props) {
  const { city, country } = props;
  return <h1>{` ${city}, ${country}`}</h1>;
}

// function LocationDetails({ city, country }) {
//   return <h1>{` ${city}, ${country}`}</h1>;
// }

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;

/* --save used to save the loaded package into dependencies of package.json they are needed for the app to run, installed on both development and production environments */
/* --save-dev used to save the loaded package into devDependencies of package.json they are needed for the app to run, installed on development environments only (testing,building or local development) */
