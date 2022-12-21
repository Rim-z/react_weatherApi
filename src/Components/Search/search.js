import React from "react";
import "../../style.css";

const Search = (props) => {
  return (
    <div className="search">
      <input
        id="searchInput"
        className="search--input"
        type="text"
        placeholder="Type in a city name"
        onKeyUp={(event) =>
          event.key === "Enter" &&
          props.handleInput(document.getElementById("searchInput").value)
        }
      />
      <input
        id="searchBtn"
        className="search--button"
        type="button"
        value="FIND WEATHER"
        onClick={() =>
          props.handleInput(document.getElementById("searchInput").value)
        }
      />
    </div>
  );
};

export default Search;
