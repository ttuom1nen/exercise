import React from "react";
import ReactDOM from "react-dom";

// Use faker for dummy data
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
