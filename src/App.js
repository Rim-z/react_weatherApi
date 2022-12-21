import "./App.css";
import React, { useState } from "react";
import WeatherToday from "./Components/Weather-Today/weatherToday";
import Weather from "./Components/weather-now/Weather";
import Search from "./Components/Search/search";

const App = () => {
  const [weatherToday, setWeatherToday] = useState(null);
  // const [flag, setFlag] = useState(false);

  const handleSearch = async (city) => {
    await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${process.env.REACT_APP_SECURE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === "404") {
          document.getElementById("error--input").style.display = "flex";
          document.getElementById("error-title").innerHTML = "City Not Found";
          document.getElementById("error-text").innerHTML =
            "Please enter a valid 'City' name";
          document.querySelector(".search").style.backgroundColor = "#759eda";
          document.querySelector(".search--button").style.backgroundColor =
            "#5879c7";
          document.body.style.backgroundColor = "#9ccef4";
          document.querySelector(".search").style.transition =
            document.querySelector(".search--button").style.transition =
            document.body.style.transition =
              "0.4s ease-in-out";
        } else if (data.cod === "200") {
          setWeatherToday(data.list);
        }
      })
      .catch((err) => {
        console.log(err.message);
        document.getElementById("error--input").style.display = "flex";
        document.getElementById("error-title").innerHTML =
          "No Internet Connection";
        document.getElementById("error-text").innerHTML =
          "Please check your internet connection and try again";
        document.querySelector(".search").style.backgroundColor = "#759eda";
        document.querySelector(".search--button").style.backgroundColor =
          "#5879c7";
        document.body.style.backgroundColor = "#9ccef4";
        document.querySelector(".search").style.transition =
          document.querySelector(".search--button").style.transition =
          document.body.style.transition =
            "0.4s ease-in-out";
        setWeatherToday(null);
      });
  };
  return (
    // ****************************************
    // When entering an empty text
    <div className="app">
      <div id="error--input">
        <h2 id="error-title">Title</h2>
        <p id="error-text">Text</p>
        <button
          onClick={() => {
            setWeatherToday(null);
            document.getElementById("error--input").style.display = "none";
          }}
        >
          Ok
        </button>
      </div>
      {/* ******************************** */}
      <Search
        handleInput={(city) => {
          if (city) {
            handleSearch(city);
          } else {
            document.getElementById("error--input").style.display = "flex";
            document.getElementById("error-title").innerHTML =
              "Empty City Name";
            document.getElementById("error-text").innerHTML =
              "Please enter a 'City' name before finding the weather";
            document.querySelector(".search").style.backgroundColor = "#759eda";
            document.querySelector(".search--button").style.backgroundColor =
              "#5879c7";
            document.body.style.backgroundColor = "#9ccef4";
            document.querySelector(".search").style.transition =
              document.querySelector(".search--button").style.transition =
              document.body.style.transition =
                "0.4s ease-in-out";
            setWeatherToday(null);
          }
        }}
      />
      {weatherToday && (
        <Weather
          id={weatherToday[0].weather[0].id}
          description={weatherToday[0].weather[0].description}
          lowTemp={weatherToday[0].main.temp_min}
          highTemp={weatherToday[0].main.temp_max}
          humidity={weatherToday[0].main.humidity}
          pressure={weatherToday[0].main.pressure}
        />
      )}
      {weatherToday && (
        <section className="weather--today">
          <WeatherToday
            id={weatherToday[1].weather[0].id}
            hour={weatherToday[1].dt_txt.split(" ")[1].split(":")[0]}
            temp={weatherToday[1].main.temp}
          />
          <WeatherToday
            id={weatherToday[2].weather[0].id}
            hour={weatherToday[2].dt_txt.split(" ")[1].split(":")[0]}
            temp={weatherToday[2].main.temp}
          />
          <WeatherToday
            id={weatherToday[3].weather[0].id}
            hour={weatherToday[3].dt_txt.split(" ")[1].split(":")[0]}
            temp={weatherToday[3].main.temp}
          />
          <WeatherToday
            id={weatherToday[4].weather[0].id}
            hour={weatherToday[4].dt_txt.split(" ")[1].split(":")[0]}
            temp={weatherToday[4].main.temp}
          />
          <WeatherToday
            id={weatherToday[5].weather[0].id}
            hour={weatherToday[5].dt_txt.split(" ")[1].split(":")[0]}
            temp={weatherToday[5].main.temp}
          />
          <WeatherToday
            id={weatherToday[6].weather[0].id}
            hour={weatherToday[6].dt_txt.split(" ")[1].split(":")[0]}
            temp={weatherToday[6].main.temp}
          />
          <WeatherToday
            id={weatherToday[7].weather[0].id}
            hour={weatherToday[7].dt_txt.split(" ")[1].split(":")[0]}
            temp={weatherToday[7].main.temp}
          />
        </section>
      )}
    </div>
  );
};

export default App;

