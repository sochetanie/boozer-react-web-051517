import React, {Component} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


export default class CocktailShow extends React.Component {

  shouldRender () {
    // debugger
    return this.props.cocktail.name ? <div key={this.props.cocktail.id} className='right'>
        <h2><strong>Description: </strong>{this.props.cocktail.name}</h2>
        <p><strong>Description: </strong>{this.props.cocktail.description}</p>
        <p><strong>Instructions: </strong>{this.props.cocktail.instructions}</p>
        <h4>Proportions: </h4>
        {this.props.cocktail.proportions.map(p => 
          <ul key={p.id}>
            <li> {p.amount}</li>
            <li> {p.ingredient_name}</li>
          </ul>
          )}
    </div> : null
  }

  render () {
    console.log(this.props.cocktail)
    return (this.shouldRender())
  }

}
