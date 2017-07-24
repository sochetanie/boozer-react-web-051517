import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

export default class Nav extends Component {

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item><NavLink to='/cocktails'>See all Cocktails</NavLink></Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='logout' />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}