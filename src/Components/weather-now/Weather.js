import React from "react";
import "../../style.css";

const Weather = (props) => {
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
  /*
Raining
  Header : #7287ac
  Background : #a3b5c1
  Button : #5366a5
Clear
  Header : #1b6cd4
  Background : #2490ee
  Button : #1851b9
Overcast Clouds:
  Header : #759eda
  Background : #9ccef4
  Button : #5879c7
*/

  if (
    props.description === "light rain" ||
    props.description === "moderate rain"
  ) {
    document.querySelector(".search").style.backgroundColor = "#7287ac";
    document.querySelector(".search--button").style.backgroundColor = "#5366a5";
    document.body.style.backgroundColor = "#a3b5c1";
  } else if (
    props.description === "broken clouds" ||
    props.description === "scattered clouds" ||
    props.description === "overcast clouds" ||
    props.description === "broken clouds" ||
    props.description === "few clouds"
  ) {
    document.querySelector(".search").style.backgroundColor = "#759eda";
    document.querySelector(".search--button").style.backgroundColor = "#5879c7";
    document.body.style.backgroundColor = "#9ccef4";
  } else if (props.description === "clear sky") {
    document.querySelector(".search").style.backgroundColor = "#1b6cd4";
    document.querySelector(".search--button").style.backgroundColor = "#1851b9";
    document.body.style.backgroundColor = "#2490ee";
  }
  document.querySelector(".search").style.transition =
    document.querySelector(".search--button").style.transition =
    document.body.style.transition =
      "0.4s ease-in-out";
  return (
    <section className="weather--now">
      <img
        className="weather--now--image"
        src={require(`../../img/weather-icons/${imgName}`)}
        alt="Weather right now"
      />
      <h2 className="weather--now--title">{props.description}</h2>
      <div className="temperature--now">
        <h1 className="temp--now--title">Temperature</h1>
        <p className="low--temp">{Math.floor(props.lowTemp)}</p>
        <p>to</p>
        <p className="high--temp">{Math.floor(props.highTemp)}</p>
        <p>C</p>
      </div>
      <div className="humidity--pressure">
        <h3 className="humidity--pressure--title">Humidity</h3>
        <p className="humidity">{props.humidity}%</p>
        <h3 className="humidity--pressure--title">Pressure</h3>
        <p className="pressure">{props.pressure}</p>
      </div>
    </section>
  );
};

export default Weather;