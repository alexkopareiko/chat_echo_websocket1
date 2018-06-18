import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {filter} from '../actions/filter-contact';



class FilterContact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
      }

  handleSubmit(e) {
    e.preventDefault();
    var firstName = this.filterInput.value;

    this.props.filter (firstName);

  }

  showForm () {
    return (
      <form onSubmit={this.handleSubmit}>
      <h2>Поиск</h2>
        Имя:<br />
        <input type="text" ref={(input) => { this.filterInput = input; }} onChange={this.handleSubmit}/>
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
  return bindActionCreators({filter: filter}, dispatch)
}

export default connect (mapStateToProps, matchDispatchToProps)(FilterContact);
