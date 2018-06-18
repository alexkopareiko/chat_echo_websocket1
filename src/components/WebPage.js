import React from 'react';
import ContactList from '../containers/contact-list';
import Details from '../containers/details';
import AddContact from '../containers/add-contact';


const WebPage = () => (
  <div>
    <h3>Contacts:</h3>
    <AddContact />
    <ContactList />

    <hr />
    <h3>Details:</h3>
    <Details />
  </div>
);

export default WebPage;
