import React from 'react'
import CocktailList from './CocktailList'
import CocktailShow from './CocktailShow'
import {Route} from 'react-router-dom'
import { Grid } from 'semantic-ui-react'


export default class CocktailContainer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentCocktail: {},
      cocktailList: [],
    }
  }

  componentWillMount = () => {
    fetch('http://localhost:3000/api/v1/cocktails')
    .then(res=>res.json())
    .then(cocktailList=>{
      this.setState({cocktailList})
    })
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      searchTerms: event.target.value
    })
  }

  changeSelectedCocktail = (cocktail) => {
    this.setState({currentCocktail: cocktail})
  }

  filterByName = () => {
    this.setState({
      searchTerm: this.state.cocktailList.filter(x=>x.name.toLowerCase().includes(this.state.searchTerms.toLowerCase()))
    }) 
  }

  render() {
    return (
      <div className='container'>
        <Grid className="ui two column grid">
            <Grid.Column className="ui inverted black vertical segment">
              <Route path='/cocktails' render={()=>(
                <CocktailList cocktails={this.state.cocktailList} changeCocktail={this.changeSelectedCocktail}/>
                )}/>
            </Grid.Column>
            <Grid.Column className="ui inverted black vertical segment">
              <Route path='/cocktails/:id' render={()=>(
                <CocktailShow cocktail={this.state.currentCocktail}/>
                )}/>
            </Grid.Column>
        </Grid>
    </div>
      )
  }


}