import React from "react";
import cloudy from "../images/weather-icons/cloudy.svg";
import clear from "../images/weather-icons/clear.svg";

function Footer() {
  return (
    <div id="hours">
      <div>
        <p className="time">03:00</p>
        <img src={cloudy} alt="storm icon" />
        <p>8°C</p>
      </div>

      <div>
        <p className="time">06:00</p>
        <img src={cloudy} alt="clear icon" />
        <p>9°C</p>
      </div>

      <div>
        <p className="time">09:00</p>
        <img src={clear} alt="clear icon" />
        <p>14°C</p>
      </div>

      <div>
        <p className="time">12:00</p>
        <img src={clear} alt="clear icon" />
        <p>17°C</p>
      </div>

      <div>
        <p className="time">15:00</p>
        <img src={clear} alt="clear icon" />
        <p>18°C</p>
      </div>

      <div>
        <p className="time">18:00</p>
        <img src={clear} alt="clear icon" />
        <p>16°C</p>
      </div>

      <div>
        <p className="time">21:00</p>
        <img src={cloudy} alt="clear icon" />
        <p>13°C</p>
      </div>
    </div>
  );
}

export default Footer;
