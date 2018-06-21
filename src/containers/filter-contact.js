import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {filter} from '../actions/filter-contact';
import { Icon, Input } from 'semantic-ui-react';



class FilterContact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
      }

  handleSubmit(e) {
    e.preventDefault();
    var firstName = e.target.value;
    this.props.filter (firstName);
  }

  showForm () {
    return (
      <div>
        <h2>Search</h2>
        <Input placeholder='Type a name...'  onChange={this.handleSubmit}/>
      </div>

    );
  }

  render () {
    return (
        this.showForm ()
    );
  }
}

function mapStateToProps (state) {
  return {
    contact: state.contact
  };

}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({filter: filter}, dispatch)
}

export default connect (mapStateToProps, matchDispatchToProps)(FilterContact);
