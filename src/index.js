import React from "react";
import ReactDOM from "react-dom";

// Use faker for dummy data
import faker from "faker";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

/*
const users = fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(json => console.log(json));
*/

const App = () => {
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
