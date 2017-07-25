import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import Search from './Search'

const colorsA = ['green']

export default class Nav extends Component {
  state = { activeA: colorsA[0]}

  handleAClick = (e, { name }) => this.setState({ activeA: name })

  render() {
    const { activeA } = this.state

    return (
      <div>
        <Menu inverted>
          {colorsA.map(c => (
              <Menu.Item key={c} name={c} active={activeA === c} color={c} onClick={this.handleAClick} > 
                <NavLink to='/cocktails'>See all Cocktails</NavLink>
              </Menu.Item>)
          )}
          <Menu.Menu position='right'>
            <Search handleSearch={this.props.onSearchSubmit}/>
            <Menu.Item> <Button color='red'>Log Out</Button> </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}