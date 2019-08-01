import React from "react";

//import Spinner from "./Spinner";
import PostList from "./PostList";
import FilterPanel from "./FilterPanel";
import Modal from "./Modal";

class App extends React.Component {
  state = { showModal: false };
  handleShowMessageClick = () => this.setState({ showModal: true });
  handleCloseModal = () => this.setState({ showModal: false });
  render() {
    return (
      <React.Fragment>
        <div className="ui container">
          <button onClick={this.handleShowMessageClick}>
            Show Secret Modal
          </button>
          {this.state.showModal ? (
            <Modal onClose={this.handleCloseModal}>
              This is the secret modal message!
            </Modal>
          ) : null}
          <PostList />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
