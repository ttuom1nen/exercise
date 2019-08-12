import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <React.Fragment>
        <div className="extra">
          <Link to={`/userinfo/${user.id}`}>
            <span className="hand">
              <img
                src="img/placeholder.png"
                className="ui circular avatar image"
                alt="User thumbnail"
              />
              <span>{user.name}</span>
            </span>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  };
};

export default connect(mapStateToProps)(UserHeader);
