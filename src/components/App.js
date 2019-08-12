import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
//import Spinner from "./Spinner";
import PostList from "./PostList";
import UserInfo from "./UserInfo";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="ui container">
          <BrowserRouter>
            <Route path="/" exact component={PostList} />
            <Route path="/userinfo/:id" exact component={UserInfo} />
          </BrowserRouter>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
