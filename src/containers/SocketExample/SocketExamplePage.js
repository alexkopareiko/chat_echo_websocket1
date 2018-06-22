import React, {Component} from 'react';
import SocketConnectionLog from '../../components/SocketExampleComponents/SocketConnectionLog';
import SocketMessageLog from '../../components/SocketExampleComponents/SocketMessageLog';

export default class SocketExamplePage extends Component {
  render() {
    return (
      <div>


      <h1>Socket Exapmle Page</h1>
      <p>Sockets not connected</p>


      <SocketConnectionLog/>
      <SocketMessageLog/>


      </div>
    );

  }
}
