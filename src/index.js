import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const buttonText = "Click me!";

  return (
    <div>
      <label className="label">
        Enter name:
        <input id="name" type="text" />
      </label>
      <button
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={() => {
          console.log(document.getElementById("name").value);
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
