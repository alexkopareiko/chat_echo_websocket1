import {combineReducers} from 'redux';
import contactReducers from './contact';
import activeContact from './contact-active';
import addContact from './add-contact';

const allReducers = combineReducers ({
  contact: contactReducers,
  active: activeContact,
  add: addContact
});

export default allReducers
