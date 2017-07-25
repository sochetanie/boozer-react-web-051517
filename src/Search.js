import React from 'react'
import CocktailList from './CocktailList'
import CocktailContainer from './CocktailContainer'

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchTerms: ''
    }
  }

  handleSearch = (event) => {
    this.setState({
      searchTerms: event.target.value
    })
  }

  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder={"Search by the name"}
          onChange={this.handleSearch}
        />
      </div>
    )
  }

}