import React from "react";
import ReactDOM from "react-dom";

// Use faker for dummy data
import faker from "faker";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";
import { timingSafeEqual } from "crypto";

/*
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(json => console.log(json));
*/

/*
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
};*/

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
