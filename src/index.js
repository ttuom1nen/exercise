import React from "react";
import ReactDOM from "react-dom";

// Use faker for dummy data
import faker from "faker";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

/*
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(json => console.log(json));
*/

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="12:00"
          content="Nice blog post, man!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
