import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';
import DeleteContact from './delete-contact';
import { Link } from 'react-router-dom'


class ContactList extends Component {
  showList () {
    return this.props.contact.map ((contactRow) => {
      return (
        <div>
            <li
              onClick={() => this.props.select (contactRow)}
              key={contactRow.id}>{contactRow.firstName}
              &nbsp;&nbsp;<Link to={{pathname: '/edit', state: { fromDashboard: contactRow }}}>Edit</Link>&nbsp;&nbsp;
            </li>

            <DeleteContact contactId = {contactRow.id}/>&nbsp;

       </div>
      );
    });
  }
  render () {
    return (
      <div>
        <h3>Contacts:</h3>
        <ul>
          {this.showList ()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state) {

  return  {
    contact: state.contact.filter(contactTemp => contactTemp.firstName.toLowerCase().includes(state.filter.toLowerCase()))

  };

}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({select: select}, dispatch)
}

export default connect (mapStateToProps, matchDispatchToProps)(ContactList);
