import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {connect_ws, disconnect_ws, send_ws} from '../actions/index';
import { Button } from 'semantic-ui-react';

class Start extends Component {

  constructor(props) {
     super(props);
     this.btnHandlerOn = this.btnHandlerOn.bind(this);
     this.btnHandlerOff = this.btnHandlerOff.bind(this);
     this.btnHandlerSend = this.btnHandlerSend.bind(this);

     this.state = {


     }
   }

   componentDidMount() {

    //console.log(this.refs._ref.value);
  }


  btnHandlerOn(e) {
    e.preventDefault();
    this.props.actions.connect_ws();


  }

  btnHandlerOff(e) {
    e.preventDefault();
    this.props.actions.disconnect_ws();

  }

  btnHandlerSend(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.actions.send_ws(this.refs._ref.value);

  }

  showList() {
    return (
      <div>
        <Button onClick={e => this.btnHandlerOn(e)}>Connect</Button>
        <Button onClick={e => this.btnHandlerOff(e)}>Disconnect</Button>

        <div className="ui form">

          <div className="field">
            <label>Short Text</label>
            <textarea rows="2" ref='_ref'></textarea>
          </div>
          <Button onClick={e => this.btnHandlerSend(e)} >Send</Button>
        </div>

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

function mapStateToProps (state) {

  return  {
    connectState: state
  };

}

function matchDispatchToProps (dispatch) {
  return {//bindActionCreators({select: select}, dispatch)
    actions: {
        connect_ws: bindActionCreators(connect_ws, dispatch),
        disconnect_ws: bindActionCreators(disconnect_ws, dispatch),
        send_ws: bindActionCreators(send_ws, dispatch)
        }
    }
}

export default connect (mapStateToProps, matchDispatchToProps)(Start);
