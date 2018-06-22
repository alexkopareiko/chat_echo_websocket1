import React, {Component} from 'react';

export default class SocketMessageLog extends Component {
  render() {
    return (
      <div>
        <h3>Message log</h3>
        <ul>
          <li key="1" className="unstyled">
            <span className="glyphicon glyphicon-arrow-right"></span>
            Socket string
          </li>
          <li key="2" className="unstyled">
            <span className="glyphicon glyphicon-arrow-left"></span>
            [ECHO] Socket string
          </li>
        </ul>
        <form className="form-inline">
          <p></p>
          <div className="form-group">
            <input
            className="form-control input-sm"
            type="text"
            ref="message_text"></input>
          </div>
          <button className="btn btn-primary btn-sm">
            <i className="fa fa-sign-in"/> Send
          </button>
        </form>
      </div>
    );
  }
}
