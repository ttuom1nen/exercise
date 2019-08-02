import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="ui dimmer active" onClick={props.onClose}>
      <div
        className="ui standard test modal transition visible active"
        style={{ display: "block !important" }}
        onClick={e => e.stopPropagation()}
      >
        <div className="header">{props.name}</div>
        <div className="image content">
          <div className="ui medium image">
            <img src="img/placeholder.png" alt="avatar" />
          </div>
          <div className="description">{props.children}</div>
        </div>
        <div className="actions">
          <div className="ui black deny button" onClick={props.onClose}>
            Close
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
