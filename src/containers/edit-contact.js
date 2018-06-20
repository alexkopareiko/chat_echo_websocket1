import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {edit} from '../actions/edit-contact';
import FormErrors from './form-errors'


class EditContact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      photo:'',
      formErrors: {email: '', firstName: '', lastName: '', photo: ''},
      emailValid: false,
      firstNameValid: false,
      lastNameValid: false,
      photoValid: false,
      formValid: false,
      name: props.location.state.fromDashboard.firstName,
      value1: ''
    }
  }

  /*handleUserInput = (e) => {
    e.preventDefault();
    name = e.target.name;
    value1 = e.target.value;
    this.setState({[name]: value},
              () => { this.validateField(name, value) });
    alert(e.target.value);

  }*/


  handleUserInput(value, name){
  //   this.setState({[name]: value},
  //             () => { this.validateField(name, value) });
  // //  console.log(state);
    this.validateField(name, value);

    }

  validateField(fieldName, value) {

    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let photoValid = this.state.photoValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' не верно';
        break;

      case 'firstName':
      firstNameValid = ( (value.length >= 2) &&
                      ( value.match(/[а-яА-Яa-zA-Z]/g) ) &&
                      !( value.match(/[0-9]/g) ) &&
                      !( value.match(/[\/\\\[\]<>,\.\!@\^\$\|\+\(\)\s%"':;`~_\\#&*]+/g) ));

        fieldValidationErrors.firstName = firstNameValid ? '': 'слишком коротко, либо содержит недопустимые символы';
        break;

      case 'lastName':
      lastNameValid = ( (value.length >= 2) &&
                      ( value.match(/[а-яА-Яa-zA-Z]/g) ) &&
                      !( value.match(/[0-9]/g) ) &&
                      !( value.match(/[\/\\\[\]<>,\.\!@\^\$\|\+\(\)\s%"':;`~_\\#&*]+/g) ));

        fieldValidationErrors.lastName = lastNameValid ? '': 'слишком коротко, либо содержит недопустимые символы';
        break;

        case 'photo':
        photoValid = (!( value.match(/[\\\[\]^\|\s]+/g) ));

          fieldValidationErrors.photo = photoValid ? '': 'содержит недопустимые символы';
          break;

      default:
        break;
      }

      this.setState({formErrors: fieldValidationErrors,
                  emailValid: emailValid,
                  firstNameValid: firstNameValid,
                  lastNameValid:lastNameValid
                }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.firstNameValid && this.state.lastNameValid && this.state.photo});
  }


  handleSubmit(e) {
    e.preventDefault();
    var contact = {
      id: this.idInput.value,
      firstName: this.firstInput.value,
      lastName: this.lastInput.value,
      company: this.companyInput.value,
      email: this.emailInput.value,
      photo: this.photoInput.value
    }
    this.props.edit (contact);
  }

  showForm () {
    return (
      <div>
        <FormErrors formErrors={this.state.formErrors} />
        <form onSubmit={this.handleSubmit} key={Date.now().toString()}>
        <h2>Редактирование</h2>
          Id:<br />
          <input type="text" ref={(input) => { this.idInput = input; }} readOnly value={this.props.location.state.fromDashboard.id} required={true} />
          <br />
          Имя:<br />
          <input type="text" ref={(input) => { this.firstInput = input; }} placeholder={this.props.location.state.fromDashboard.firstName} onChange={e => this.handleUserInput(e.target.value, e.target.name)}  name="firstName" />
          <br />
          Фамилия:<br />
          <input type="text" ref={(input) => { this.lastInput = input; }}  defaultValue={this.props.location.state.fromDashboard.lastName} required={true} name="lastName" />
          <br />
          Телефон:<br />
          <input type="number" ref={(input) => { this.telInput = input; }} defaultValue={this.props.location.state.fromDashboard.tel} required={true} />
          <br />
          Email:<br />
          <input type="email" ref={(input) => { this.emailInput = input; }}  defaultValue={this.props.location.state.fromDashboard.company} required={true}  name="email" />
          <br />
          Компания:<br />
          <input type="text" ref={(input) => { this.companyInput = input; }} defaultValue={this.props.location.state.fromDashboard.email} required={true} />
          <br />
          Фото:<br />
          <input type="url" ref={(input) => { this.photoInput = input; }}  defaultValue={this.props.location.state.fromDashboard.photo} required={true} name="photo"   />
          <br /><br />
          <input type="submit" value="Submit" disabled={!this.state.formValid}/>
        </form>
      </div>
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
