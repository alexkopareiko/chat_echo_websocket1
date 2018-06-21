import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
  render () {
    if (!this.props.contact) {
      return (<p>Выберите контакт...</p>);
    }
    return (
      <div>
      
        <h2>{this.props.contact.firstName} {this.props.contact.lastName}</h2>
        <img src={this.props.contact.photo} /><br />
        <p>Телефон: {this.props.contact.tel}</p>
        <p>Email: {this.props.contact.email}</p>
        <p>Компания: {this.props.contact.company}</p>
      </div>
    );
  }
}


function mapStateToProps (state) {
  return {
    contact: state.active
  };

}

export default connect (mapStateToProps)(Details);
