import React from "react";
import "../../style.css";

const WeatherToday = (props) => {
  let imgName = "";
  if (props.id < 300) {
    imgName = "storm.svg";
  } else if (props.id >= 300 && props.id < 500) {
    imgName = "drizzle.svg";
  } else if (props.id >= 500 && props.id < 600) {
    imgName = "rain.svg";
  } else if (props.id >= 600 && props.id < 700) {
    imgName = "snow.svg";
  } else if (props.id >= 700 && props.id < 800) {
    imgName = "fog.svg";
  } else if (props.id === 800) {
    imgName = "clear.svg";
  } else if (props.id === 801) {
    imgName = "partlycloudy.svg";
  } else if (props.id > 801 && props.id < 805) {
    imgName = "mostlycloudy.svg";
  }
  return (
    <div className="card">
      <p className="card--time">{props.hour}:00</p>
      <img
        src={require(`../../img/weather-icons/${imgName}`)}
        className="card--icon"
        alt="weather per hour"
      />
      <p className="card--temp">{Math.floor(props.temp)}°C</p>
    </div>
  );
};

export default WeatherToday;
