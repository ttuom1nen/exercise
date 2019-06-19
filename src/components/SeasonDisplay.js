import "../SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Vamos Ala Playa!",
    iconName: "sun",
    color: "yellow"
  },
  winter: {
    text: "It's cold!",
    iconName: "snowflake",
    color: "blue"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName, color } = seasonConfig[season];

  return (
    <a className={`ui image label season-display ${color} image`}>
      <i className={`large ${iconName} icon`} />
      {text}
    </a>
  );
};

export default SeasonDisplay;
