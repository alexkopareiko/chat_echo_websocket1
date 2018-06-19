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
    console.log(this.props.location.state.fromDashboard);
    return (
      <form onSubmit={this.handleSubmit}>
      <h2>Редактирование</h2>
        Id:<br />
        <input type="text" ref={(input) => { this.idInput = input; }} value={this.props.location.state.fromDashboard.id}/>
        <br />
        Имя:<br />
        <input type="text" ref={(input) => { this.firstInput = input; }} value={this.props.location.state.fromDashboard.firstName}/>
        <br />
        Фамилия:<br />
        <input type="text" ref={(input) => { this.lastInput = input; }} value={this.props.location.state.fromDashboard.lastName}/>
        <br />
        Телефон:<br />
        <input type="number" ref={(input) => { this.telInput = input; }} value={this.props.location.state.fromDashboard.tel}/>
        <br />
        Email:<br />
        <input type="email" ref={(input) => { this.emailInput = input; }} value={this.props.location.state.fromDashboard.company}/>
        <br />
        Компания:<br />
        <input type="text" ref={(input) => { this.companyInput = input; }} value={this.props.location.state.fromDashboard.email}/>
        <br />
        Фото:<br />
        <input type="url" ref={(input) => { this.photoInput = input; }} value={this.props.location.state.fromDashboard.photo}/>
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
    );
  }

  render () {
    return this.showForm ();
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
