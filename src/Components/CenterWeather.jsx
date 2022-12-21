import React from "react";
import storm from "../images/weather-icons/mostlycloudy.svg";

const CenterWeather = () => {
  return (
    <div className="app-center-weather">
      <img src={storm} alt="storm icon" />
      <h3 ba>overcast clouds</h3>
      <div className="app-center-weatherTemperature">
        <b>Temperature &nbsp;</b>10°C to 11°C
      </div>
      <div className="football">
        <div className="app-center-weatherdetailsHumidity">
          <b>Humidity &nbsp;</b> 78%
        </div>
        <div className="app-center-weatherdetailsPressure">
          <b>Presssure &nbsp;</b> 1008.48
        </div>
      </div>
    </div>
  );
};
export default CenterWeather;
