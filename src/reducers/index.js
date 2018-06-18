import {combineReducers} from 'redux';
import contactReducers from './contact';
import activeContact from './contact-active';

import filterContact from './filter-contact'

const allReducers = combineReducers ({
  contact: contactReducers,
  active: activeContact,
  filter: filterContact
});

export default allReducers
