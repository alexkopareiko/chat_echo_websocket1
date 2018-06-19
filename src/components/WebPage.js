import React from 'react';
import ContactList from '../containers/contact-list';
import Details from '../containers/details';
import Main from './Main';
import Header from './Header';

const WebPage = () => (
  <div>

    <Header />
    <Main />
    <ContactList />
    <hr />
    <h3>Details:</h3>
    <Details />
  </div>
);

export default WebPage;
