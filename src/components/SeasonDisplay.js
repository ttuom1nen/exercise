import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === "Winter" ? "It's cold!" : "Vamos Ala Playa!";
  const icon = season === "Winter" ? "icon snowflake" : "icon sun";

  return (
    <div>
      <i className={icon} />
      <h1>{text}</h1>
    </div>
  );
};

export default SeasonDisplay;
