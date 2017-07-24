import React from 'react'
import CocktailList from './CocktailList'
import CocktailShow from './CocktailShow'
import {Route} from 'react-router-dom'
import { Segment } from 'semantic-ui-react'


export default class CocktailContainer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentCocktail: {},
      cocktailList: [],
      searchTerm: ''
    }
  }

  componentWillMount = () => {
    fetch('http://localhost:3000/api/v1/cocktails')
    .then(res=>res.json())
    .then(cocktailList=>{
      // debugger
      this.setState({cocktailList})
    })
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      searchTerm: event.target.value
    })
  }

  changeSelectedCocktail = (cocktail) => {
    this.setState({currentCocktail: cocktail})
  }

  render() {
    return (
      <Segment>
        <Route path='/cocktails' render={()=>(
            <CocktailList cocktails={this.state.cocktailList} changeCocktail={this.changeSelectedCocktail}/>
              )}/>
        <Route path='/cocktails/:id' render={()=>(
            <CocktailShow cocktail={this.state.currentCocktail}/>
            )}/>
      </Segment>
      )
  }


}