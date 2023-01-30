import React from "react";

import attributes from "./styles/NumberOfStations.module.css";

function NumberOfStations({ number }) {
  return (
    <div className={attributes.container}>
      <div className={attributes.number}>{number}</div>
      <div className={attributes.text}>Charging Stations</div>
    </div>
  );
}

export default NumberOfStations;
