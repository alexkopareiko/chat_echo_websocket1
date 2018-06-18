import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

class ContactList extends Component {
  showList () {
    return this.props.contact.map ((contactRow) => {
      return (
        <li
         onClick={() => this.props.select (contactRow)}
         key={contactRow.id}>{contactRow.firstName}</li>
      );
    });
  }
  render () {
    return (
      <ul>
        {this.showList ()}
      </ul>
    );
  }
}

function mapStateToProps (state) {
  return  {
    contact: [
      ...state.contact,
      ...state.add ]

  };

}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({select: select}, dispatch)
}

export default connect (mapStateToProps, matchDispatchToProps)(ContactList);
