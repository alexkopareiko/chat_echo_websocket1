import React, {Component} from 'react';
import Start from '../containers/Start';

export default class App extends Component {


showList() {
  return (
    <div>
      <h3>Chat on Websocket</h3>
      <Start />
    </div>
  );
}

  render() {
    return (
      <div>
        {this.showList()}
      </div>
    );
  }
}
