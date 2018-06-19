import React from 'react';
import ContactList from '../containers/contact-list';
import Details from '../containers/details';
import EditContact from '../containers/edit-contact';


const WebPage = () => (
  <div>

    <EditContact />
    <ContactList />

    <hr />
    <h3>Details:</h3>
    <Details />
  </div>
);

export default WebPage;
