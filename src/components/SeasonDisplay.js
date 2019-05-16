import React from "react";

const seasonConfig = {
  summer: {
    text: "Vamos Ala Playa!",
    iconName: "sun"
  },
  winter: {
    text: "It's cold!",
    iconName: "snowflake"
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
  const { text, iconName } = seasonConfig[season];

  return (
    <div>
      <i className={`massive ${iconName} icon`} />
      <h1>{text}</h1>
    </div>
  );
};

export default SeasonDisplay;
