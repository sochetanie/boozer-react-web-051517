import React from 'react'
import { Feed } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class CocktailList extends React.Component {

  renderList () {
    return (this.props.cocktails.map(g => (
      <Feed.Event key={g.id}>
        <Feed.Content>
          <Link onClick={() => this.props.changeCocktail(g)} to={`/cocktails/${g.id}`}>{g.name}</Link>
        </Feed.Content>
      </Feed.Event>
    )))
  }
  render () {
    return (<Feed>{this.renderList()}</Feed>)
  }
}
