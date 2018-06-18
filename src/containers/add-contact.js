import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {add} from '../actions/add-contact';



class AddContact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
      }

  handleSubmit(e) {
    e.preventDefault();
    var contact = {
      id: Date.now().toString(),
      firstName: this.firstInput.value,
      lastName: this.lastInput.value,
      tel: this.telInput.value,
      company: this.emailInput.value,
      email: this.companyInput.value,
      photo: this.photoInput.value
    }
    this.props.add (contact);
    console.log(this.firstInput.value);

  }

  showForm () {
    return (
      <form onSubmit={this.handleSubmit}>
      <h2>Добавление</h2>
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
    contact: state.contact
  };

}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({add: add}, dispatch)
}

export default connect (mapStateToProps, matchDispatchToProps)(AddContact);
