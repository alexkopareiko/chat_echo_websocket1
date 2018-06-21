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
      firstName: props.contact.firstName,
      lastName: props.contact.lastName,
      email: props.contact.email,
      photo:props.contact.photo,
      tel: props.contact.tel,
      company: props.contact.company,
      formErrors: {email: '', firstName: '', lastName: '', photo: ''},
      emailValid: true,
      firstNameValid: true,
      lastNameValid: true,
      photoValid: true,
      formValid: true,
      tempIdForUpdate: props.contact.id
    }
  }

componentDidUpdate() {
  if(this.state.tempIdForUpdate != this.props.contact.id)
  {
    this.setState(
      {
        firstName: this.props.contact.firstName,
        lastName: this.props.contact.lastName,
        email: this.props.contact.email,
        photo: this.props.contact.photo,
        tel: this.props.contact.tel,
        company: this.props.contact.company,
        tempIdForUpdate: this.props.contact.id
      }
    );

  }
}

  handleUserInput(value_e, name_e){
    const name = name_e;
    const value = value_e;

    if(this.state.tempIdForUpdate == this.props.contact.id) {

      this.setState(
        {
          firstName: this.firstInput.value,
          lastName: this.lastInput.value,
          email: this.emailInput.value,
          photo: this.photoInput.value,
          tel: this.telInput.value,
          company: this.companyInput.value,
          [name]: value
        }
      );
      this.validateField(name, value);
    }

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
                  lastNameValid:lastNameValid,
                  photoValid:photoValid
                }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.firstNameValid && this.state.lastNameValid && this.state.photoValid});
    console.log(this.state.emailValid, this.state.firstNameValid, this.state.lastNameValid, this.state.photoValid);
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
        <form onSubmit={this.handleSubmit}>
        <h2>Редактирование</h2>

          Id:<br />
          <input type="text" ref={(input) => { this.idInput = input; }} readOnly value={this.props.location.state.fromDashboard.id}/>
          <br />
          Имя:<br />
          <input type="text" ref={(input) => { this.firstInput = input; }} value={this.state.firstName} onChange={e => this.handleUserInput(e.target.value, e.target.name)}  name="firstName"/>
          <br />
          Фамилия:<br />
          <input type="text" ref={(input) => { this.lastInput = input; }}  value={this.state.lastName} onChange={e => this.handleUserInput(e.target.value, e.target.name)} required={true} name="lastName" />
          <br />
          Телефон:<br />
          <input type="number" ref={(input) => { this.telInput = input; }} value={this.state.tel} onChange={e => this.handleUserInput(e.target.value, e.target.name)} required={true} />
          <br />
          Email:<br />
          <input type="email" ref={(input) => { this.emailInput = input; }}  value={this.state.email} onChange={e => this.handleUserInput(e.target.value, e.target.name)} required={true}  name="email" />
          <br />
          Компания:<br />
          <input type="text" ref={(input) => { this.companyInput = input; }} value={this.state.company} onChange={e => this.handleUserInput(e.target.value, e.target.name)} required={true} />
          <br />
          Фото:<br />
          <input type="url" ref={(input) => { this.photoInput = input; }}  value={this.state.photo} onChange={e => this.handleUserInput(e.target.value, e.target.name)} required={true} name="photo"   />
          <br /><br />
          <input type="submit" value="Submit" disabled={!this.state.formValid} />
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
    contact: state.active
  };

}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({edit: edit}, dispatch)
}

export default connect (mapStateToProps, matchDispatchToProps)(EditContact);
