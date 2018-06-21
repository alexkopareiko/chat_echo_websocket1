import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  state = {}

  render() {

    return (
      <Menu>
        <Menu.Item
          as={Link}
          to='/search'
        >
          Search
        </Menu.Item>

        <Menu.Item
          as={Link}
          to='/add'
        >
          Add contact
        </Menu.Item>
      </Menu>
    )
  }
}
