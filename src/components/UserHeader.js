import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <React.Fragment>
        <div className="extra">
          <span className="hand">
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
