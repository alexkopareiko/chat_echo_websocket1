import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
const addConactBtn = document.querySelectorAll('.addContact')[0];
const list = document.querySelectorAll('.list')[0];
const contactInput = document.querySelectorAll('.contactInput')[0];

function contact(state = [], action) {
  if (action.type === 'ADD_CONTACT') {
    return [
      ...state,
      action.payload
    ]
  }
  return state;
}


const store = createStore(contact);

store.dispatch({ type: 'ADD_CONTACT', payload: 'Nicolay' });
store.dispatch({ type: 'ADD_CONTACT', payload: 'Boris' });




store.subscribe(() => {
  list.innerHTML = ''; //очистка контейнера
  contactInput.value = '';

  store.getState().forEach(contact => {
    const li = document.createElement('li');
    li.textContent = contact;
    list.appendChild(li);
  })

})

addConactBtn.addEventListener('click', () =>  {
  const contactName = contactInput.value;
  store.dispatch({ type: 'ADD_CONTACT', payload: contactInput });

});
