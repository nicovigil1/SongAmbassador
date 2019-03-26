import React from 'react'

class SearchBar extends React.Component {

  render() {
    return (
      <div>
        <input type="text" placeholder="Search Artists" id="search-bar"/>
        <button onClick={this.props.catchSearch} type="submit">Search</button>
      </div>
    )
  }
}

export default SearchBar