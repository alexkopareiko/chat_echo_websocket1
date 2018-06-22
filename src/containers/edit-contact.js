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
      formErrors: {email: '', firstName: '', lastName: '', photo: '', tel: '', company:''},
      emailValid: true,
      firstNameValid: true,
      lastNameValid: true,
      photoValid: true,
      telValid: true,
      companyValid: true,
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
      id: this.props.contact.id,
      firstName: this.firstInput.value.trim(),
      lastName: this.lastInput.value.trim(),
      company: this.companyInput.value.trim(),
      tel: this.telInput.value.trim(),
      email: this.emailInput.value.trim(),
      photo: this.photoInput.value.trim()
    }
    this.props.edit (contact);
  }

  showForm () {
    return (
      <div>
        <h2>Edit contact</h2>
        <FormErrors formErrors={this.state.formErrors} />
        <form onSubmit={this.handleSubmit} class="ui form">
          <div class="fields">
            <div class={!this.state.firstNameValid ? "error field":"field"}>
              <div class="ui input">
                <input type="text" ref={(input) => { this.firstInput = input; }} value={this.state.firstName} onChange={e => this.handleUserInput(e.target.value, e.target.name)}  name="firstName" placeholder="Name"/>
              </div>
            </div>
            <div class={!this.state.lastNameValid ? "error field":"field"}>
                <div class="ui input">
                  <input type="text" ref={(input) => { this.lastInput = input; }}  value={this.state.lastName} onChange={e => this.handleUserInput(e.target.value, e.target.name)} required={true} name="lastName" placeholder="Last Name"/>
                </div>
            </div>
          </div>
          <div class="fields">
            <div class={!this.state.telValid ? "error field":"field"}>
              <div class="ui input">
                <input type="tel" placeholder='Tel: 123-456-7890' ref={(input) => { this.telInput = input; }} value={this.state.tel} onChange={e => this.handleUserInput(e.target.value, e.target.name)} required={true} name="tel"/>
              </div>
            </div>
            <div class={!this.state.emailValid ? "error field":"field"}>
              <div class="ui input">
                <input type="email" ref={(input) => { this.emailInput = input; }}  value={this.state.email} onChange={e => this.handleUserInput(e.target.value, e.target.name)} required={true}  name="email" placeholder="Email"/>
              </div>
            </div>
          </div>
          <div class="fields">
            <div class={!this.state.companyValid ? "error field":"field"}>
              <div class="ui input">
                <input type="text" ref={(input) => { this.companyInput = input; }} value={this.state.company} onChange={e => this.handleUserInput(e.target.value, e.target.name)} required={true} placeholder="Company" name="company"/>
              </div>
            </div>
            <div class={!this.state.photoValid ? "error field":"field"}>
              <div class="ui input">
                <input type="url" ref={(input) => { this.photoInput = input; }}  value={this.state.photo} onChange={e => this.handleUserInput(e.target.value, e.target.name)} required={true} name="photo"   placeholder="Photo: http://"/>
              </div>
            </div>
          </div>
          <input type="submit" value="Submit" disabled={!this.state.formValid} class="ui button"/>


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
