import React from 'react'
import { Switch, Route } from 'react-router-dom'
import WebPage from './WebPage'
import AddContact from '../containers/add-contact'
import EditContact from '../containers/edit-contact'
import FilterContact from '../containers/filter-contact'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const Main = () => (
  <main>
    <Switch>
      <Route path='/search' component={FilterContact}/>
      <Route path='/add' component={AddContact}/>
      <Route path='/edit' component={EditContact}/>


    </Switch>
  </main>
)

export default Main
