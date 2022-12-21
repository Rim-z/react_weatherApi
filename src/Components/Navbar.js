import React from "react";

const Navbar = () => {
  return (
    <div className="appnavbar">
      <input className="appnavbar_input" type="text" id="message" />
      <button className="appnavbar__button">Find Weather</button>
    </div>
  );
};

export default Navbar;
