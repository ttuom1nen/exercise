import React from "react";
import { connect } from "react-redux";
import Modal from "./Modal";

class UserHeader extends React.Component {
  state = { showModal: false };

  handleShowMessageClick = () => this.setState({ showModal: true });
  handleCloseModal = () => this.setState({ showModal: false });

  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <React.Fragment>
        {this.state.showModal ? (
          <Modal onClose={this.handleCloseModal} name={user.name}>
            <p>
              <b>User name:</b> {user.username}
            </p>
            <p>
              <b>City:</b> {user.address.city}
            </p>
          </Modal>
        ) : null}
        <div className="extra">
          <span className="hand" onClick={this.handleShowMessageClick}>
            <img
              src="img/placeholder.png"
              className="ui circular avatar image"
              alt="User thumbnail"
            />
            <span>{user.name}</span>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
