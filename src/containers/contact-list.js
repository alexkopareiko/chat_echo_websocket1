import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';
import { Link } from 'react-router-dom'
import { Button, Image, List } from 'semantic-ui-react'
import {deleteContact} from '../actions/delete-contact';

class ContactList extends Component {

  handleClickDelete(contactId, e) {
    e.preventDefault();
    this.props.actions.deleteContact (contactId);
    console.log(this.props);
  }

  showList () {
    console.log(this.props);
    return this.props.contact.map ((contactRow) => {
      return (

              <div className="div_width">
                <List selection verticalAlign='middle'>
                  <List.Item onClick={() => this.props.actions.select (contactRow)}>
                    <List.Content floated='right'>
                      <Button as={Link} to='/edit'>Edit</Button>
                      <Button onClick={e => this.handleClickDelete(contactRow.id, e)}>Delete</Button>
                    </List.Content>
                    <Image avatar src={contactRow.photo} />
                    <List.Content key={contactRow.id}>
                      <List.Header>{contactRow.firstName}</List.Header>
                    </List.Content>
                  </List.Item>


                </List>
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

    contact: state.contact.filter(contactTemp =>
      contactTemp.firstName.toLowerCase().includes(state.filter.toLowerCase()))



  };

}

function matchDispatchToProps (dispatch) {
  return {//bindActionCreators({select: select}, dispatch)
    actions: {
        select: bindActionCreators(select, dispatch),
        deleteContact: bindActionCreators(deleteContact, dispatch)
        }
    }
}

export default connect (mapStateToProps, matchDispatchToProps)(ContactList);
