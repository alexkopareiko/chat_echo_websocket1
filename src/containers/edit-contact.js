import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {edit} from '../actions/edit-contact';



class EditContact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
      }

  handleSubmit(e) {
    e.preventDefault();
    var contact = {
      id: this.idInput.value,
      firstName: this.firstInput.value,
      lastName: this.lastInput.value,
      tel: this.telInput.value,
      company: this.companyInput.value,
      email: this.emailInput.value,
      photo: this.photoInput.value
    }
    this.props.edit (contact);

  }

  showForm () {
    return (
      <form onSubmit={this.handleSubmit}>
      <h2>Редактирование</h2>
        Id:<br />
        <input type="text" ref={(input) => { this.idInput = input; }} />
        <br />
        Имя:<br />
        <input type="text" ref={(input) => { this.firstInput = input; }} />
        <br />
        Фамилия:<br />
        <input type="text" ref={(input) => { this.lastInput = input; }} />
        <br />
        Телефон:<br />
        <input type="number" ref={(input) => { this.telInput = input; }} />
        <br />
        Email:<br />
        <input type="email" ref={(input) => { this.emailInput = input; }} />
        <br />
        Компания:<br />
        <input type="text" ref={(input) => { this.companyInput = input; }}/>
        <br />
        Фото:<br />
        <input type="url" ref={(input) => { this.photoInput = input; }} />
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
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
  return bindActionCreators({edit: edit}, dispatch)
}

export default connect (mapStateToProps, matchDispatchToProps)(EditContact);
