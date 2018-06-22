import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {add} from '../actions/add-contact';
import FormErrors from './form-errors'


class AddContact extends Component {
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
      telValid: false,
      companyValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
              () => { this.validateField(name, value) });

  }

  validateField(fieldName, value) {

    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let photoValid = this.state.photoValid;
    let telValid = this. state.telValid;
    let companyValid = this.state.companyValid;
    value = value.trim();

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is not correct';
        break;

      case 'firstName':
      firstNameValid = ( (value.length >= 2) &&
                      ( value.match(/[а-яА-Яa-zA-Z]/g) ) &&
                      !( value.match(/[0-9]/g) ) &&
                      !( value.match(/[\/\\\[\]<>,\.\!@\^\$\|\+\(\)%"':;`~_\\#&*]+/g) ));

        fieldValidationErrors.firstName = firstNameValid ? '': 'is too short / contains incorrect symbols';
        break;

      case 'lastName':
      lastNameValid = ( (value.length >= 2) &&
                      ( value.match(/[а-яА-Яa-zA-Z]/g) ) &&
                      !( value.match(/[0-9]/g) ) &&
                      !( value.match(/[\/\\\[\]<>,\.\!@\^\$\|\+\(\)%"':;`~_\\#&*]+/g) ));

        fieldValidationErrors.lastName = lastNameValid ? '': 'is too short / contains incorrect symbols';
        break;

        case 'photo':
        photoValid = (!( value.match(/[\\\[\]^\|\s]+/g) ));

          fieldValidationErrors.photo = photoValid ? '': 'contains incorrect symbols';
          break;

        case 'tel':
        telValid = ( value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) );

          fieldValidationErrors.tel = telValid ? '': 'need to be correct';
          break;

        case 'company':
        companyValid = ( (value.length >= 2) &&
                          ( value.match(/[а-яА-Яa-zA-Z]/g) ) &&
                          !( value.match(/[\/\\\[\]<>,\.\!@\^\$\|\+\(\)%"':;`~_\\#&*]+/g) ));

            fieldValidationErrors.company = companyValid ? '': 'is too short / contains incorrect symbols';
            break;

      default:
        break;
      }

      this.setState({formErrors: fieldValidationErrors,
                  emailValid: emailValid,
                  firstNameValid: firstNameValid,
                  lastNameValid:lastNameValid,
                  photoValid:photoValid,
                  telValid: telValid,
                  companyValid: companyValid
                }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.firstNameValid && this.state.lastNameValid && this.state.photoValid && this.state.telValid && this.state.companyValid});
  }

  handleSubmit(e) {
    e.preventDefault();
    var contact = {
      id: Date.now().toString(),
      firstName: this.firstInput.value.trim(),
      lastName: this.lastInput.value.trim(),
      company: this.companyInput.value.trim(),
      tel: this.telInput.value.trim(),
      email: this.emailInput.value.trim(),
      photo: this.photoInput.value.trim()
    }
    this.props.add (contact);
  }


  showForm () {

    return (
      <div>
        <h2>Add contact</h2>
        <FormErrors formErrors={this.state.formErrors} />


        <form onSubmit={this.handleSubmit} class="ui form">
          <div class="fields">
            <div class={!this.state.firstNameValid ? "error field":"field"}>
              <div class="ui input">
                <input type="text" ref={(input) => { this.firstInput = input; }} onChange={this.handleUserInput} name="firstName" required={true} placeholder="Name"/>
                </div>
              </div>
            <div class={!this.state.lastNameValid ? "error field":"field"}>
                <div class="ui input">
                  <input type="text" ref={(input) => { this.lastInput = input; }} onChange={this.handleUserInput} name="lastName" required={true} placeholder="Last Name"/>
                </div>
            </div>
            </div>
            <div class="fields">
              <div class={!this.state.telValid ? "error field":"field"}>
                <div class="ui input">
                  <input type="tel" ref={(input) => { this.telInput = input; }} onChange={this.handleUserInput} required={true} placeholder='Tel: 123-456-7890' name="tel"/>
                </div>
              </div>
              <div class={!this.state.emailValid ? "error field":"field"}>
                <div class="ui input">
                  <input type="email" ref={(input) => { this.emailInput = input; }} onChange={this.handleUserInput} name="email" required={true} placeholder="Email"/>
                </div>
              </div>
              </div>
              <div class="fields">
                <div class={!this.state.companyValid ? "error field":"field"}>
                  <div class="ui input">
            <input type="text" ref={(input) => { this.companyInput = input; }} onChange={this.handleUserInput} required={true} placeholder="Company" name="company"/>
                  </div>
                </div>
              <div class={!this.state.photoValid ? "error field":"field"}>
                <div class="ui input">
                  <input type="url" ref={(input) => { this.photoInput = input; }} onChange={this.handleUserInput} name="photo"  required={true} placeholder="Photo: http://"/>
                  </div>
                </div>
              </div>
            <input type="submit" value="Submit" disabled={!this.state.formValid} class="ui button"/>
        </form>
      </div >

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
  return bindActionCreators({add: add}, dispatch)
}

export default connect (mapStateToProps, matchDispatchToProps)(AddContact);
