import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import PostList from "./PostList";
import FilterPanel from "./FilterPanel";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
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
      <React.Fragment>
        <div className="ui container">
          <div className="season">{this.renderContent()}</div>
          <PostList />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
