import React from 'react';
import ContactList from '../containers/contact-list';
import Details from '../containers/details';
import Main from './Main';
import Header from './Header';

const WebPage = () => (
  <div class="div_main">
    <div class="div_left">
      <Header />
      <Main />
      <ContactList />
    </div>
      <div>
      <Details />
    </div>

  </div>
);

export default WebPage;
