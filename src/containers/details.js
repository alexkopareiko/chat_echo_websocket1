import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Card, Icon, Image } from 'semantic-ui-react'

class Details extends Component {
  render () {
    if (!this.props.contact) {
      return (<p>Choose contact...</p>);
    }
    return (
      <div key={Date.now().toString()}>

        <Card>
          <Image src={this.props.contact.photo} />
          <Card.Content>
            <Card.Header>{this.props.contact.firstName} {this.props.contact.lastName}</Card.Header>
            <Card.Meta>
              <span className='date'>Company  : {this.props.contact.company}</span>
            </Card.Meta>
            <Card.Description>Email: {this.props.contact.email}</Card.Description>
            <Card.Description>Tel: {this.props.contact.tel}</Card.Description>
          </Card.Content>
          
        </Card>

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
