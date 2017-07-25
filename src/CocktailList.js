import React from 'react'
import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class CocktailList extends React.Component {

  renderList () {
    return (
      <List divided relaxed>
      {this.props.cocktails.map(x => (
        <List.Item>
          <List.Icon name='lab' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header>
              <Link onClick={() => this.props.changeCocktail(x)} to={`/cocktails/${x.id}`}>{x.name}</Link>
            </List.Header>
          </List.Content>
        </List.Item>
      ))}
      </List>
      )
  }

  render () {
    return this.renderList()
  }
}
