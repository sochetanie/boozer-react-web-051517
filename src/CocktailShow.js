import React, {Component} from 'react'
import { Grid, Card, Icon, Image } from 'semantic-ui-react'

export default class CocktailShow extends React.Component {

  shouldRender () {
    return this.props.cocktail.name ? 
    <Card key={this.props.cocktail.id} >
    <Card.Content>
      <Card.Header> {this.props.cocktail.name} </Card.Header>
      <Card.Meta> {this.props.cocktail.description} </Card.Meta>
    </Card.Content>
    <Card.Content>
      <Card.Description> {this.props.cocktail.instructions} </Card.Description>
    </Card.Content>
    <Card.Content>
      <Card.Description> <h4>Proportions:</h4>
          <ul>
        {this.props.cocktail.proportions.map(x => 
            <li> {x.amount} of {x.ingredient_name}</li>
          )} 
          </ul>
      </Card.Description>
    </Card.Content>
    </Card> : null
  }

  render () {
    return (this.shouldRender())
  }

}
