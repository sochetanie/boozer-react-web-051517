import React from 'react'
import CocktailList from './CocktailList'

export default class Search extends React.Component {

  render() {
    return (
      <div className="ui huge fluid icon input">
        <input
          type="text"
          placeholder={"Search by the name"}
          onChange={this.props.handleChange}
        />
        <i className="circular search link icon"></i>
      </div>
    )
  }

}