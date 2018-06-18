import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';
import AddContact from './add-contact';
import FilterContact from './filter-contact';


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
      <div>
        <AddContact />
        <FilterContact />
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
