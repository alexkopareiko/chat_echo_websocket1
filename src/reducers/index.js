import {combineReducers} from 'redux';
import contactReducers from './contact';
import activeContact from './contact-active';

const allReducers = combineReducers ({
  contact: contactReducers,
  active: activeContact
});

export default allReducers
