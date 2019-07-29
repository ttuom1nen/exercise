import React from "react";

//import Spinner from "./Spinner";
import PostList from "./PostList";
import FilterPanel from "./FilterPanel";

class App extends React.Component {
  state = {
    mode: "list"
  };

  renderListMode() {
    console.log("list mode");
  }

  renderGridMode() {
    console.log("grid mode");
  }

  render() {
    return (
      <React.Fragment>
        <div className="ui container">
          <PostList
            renderGridMode={this.renderGridMode}
            renderListMode={this.renderListMode}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
