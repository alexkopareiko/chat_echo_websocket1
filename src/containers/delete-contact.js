import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {deleteContact} from '../actions/delete-contact';



class DeleteContact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    var contactId = this.props.contactId;
    this.props.deleteContact (contactId);
    console.log(this.props);
  }

  showForm () {
    return (
      <button onClick={this.handleSubmit}>Delete</button>
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
    contact: state
  };

}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({deleteContact: deleteContact}, dispatch)
}

export default connect (mapStateToProps, matchDispatchToProps)(DeleteContact);
