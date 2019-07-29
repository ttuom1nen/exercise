import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div className="extra">
        <img
          src="img/placeholder.png"
          className="ui circular avatar image"
          alt="User thumbnail"
        />{" "}
        <span>{user.name}</span>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
