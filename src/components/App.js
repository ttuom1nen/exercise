import React from "react";
//import Spinner from "./Spinner";
import PostList from "./PostList";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="ui container">
          <PostList />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
