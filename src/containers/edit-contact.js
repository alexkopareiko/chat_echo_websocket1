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
    //console.log(this.props.location.state.fromDashboard);
    return (
      <form onSubmit={this.handleSubmit} key={Date.now().toString()}> //key задает уникальность формы => true rendering
      <h2>Редактирование</h2>
        Id:<br />
        <input type="text" ref={(input) => { this.idInput = input; }} defaultValue={this.props.location.state.fromDashboard.id} required={true} />
        <br />
        Имя:<br />
        <input type="text" ref={(input) => { this.firstInput = input; }} defaultValue={this.props.location.state.fromDashboard.firstName} required={true}/>
        <br />
        Фамилия:<br />
        <input type="text" ref={(input) => { this.lastInput = input; }} defaultValue={this.props.location.state.fromDashboard.lastName} required={true} />
        <br />
        Телефон:<br />
        <input type="number" ref={(input) => { this.telInput = input; }} defaultValue={this.props.location.state.fromDashboard.tel} required={true}/>
        <br />
        Email:<br />
        <input type="email" ref={(input) => { this.emailInput = input; }} defaultValue={this.props.location.state.fromDashboard.company} required={true}/>
        <br />
        Компания:<br />
        <input type="text" ref={(input) => { this.companyInput = input; }} defaultValue={this.props.location.state.fromDashboard.email} required={true}/>
        <br />
        Фото:<br />
        <input type="url" ref={(input) => { this.photoInput = input; }} defaultValue={this.props.location.state.fromDashboard.photo} required={true}/>
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
