import React from "react";

//import Spinner from "./Spinner";
import PostList from "./PostList";
import FilterPanel from "./FilterPanel";

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
