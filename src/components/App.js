import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import PostList from "./PostList";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => console.log(json));

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request" />;
  }

  render() {
    return (
      <div className="ui container">
        <div className="season">{this.renderContent()}</div>
        <div className="">
          <PostList />
        </div>
      </div>
    );
  }
}

export default App;
