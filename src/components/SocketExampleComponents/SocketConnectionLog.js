import React, {Component} from 'react';

export default class SocketConnectionLog extends Component {
  render() {
    return (
      <div>
        <h3>Socket connection log</h3>
        <textarea
          className="form-control"
          rows="1"
          readOnly
          placeholder="Waiting ..."
          value="
            index = 2, loaded = true, message = Connected, connected = true
            index = 1, loaded = false, message = Connecting..., connected = false"/>
        <button className="btn btn-primary btn-sm">
          <i className="fa fa-sign-in"/> Connect
        </button>
        <button className="btn btn-danger btn-sm">
          <i className="fa fa-sign-out"/> Disconnect
        </button>
      </div>
    );
  }
}
