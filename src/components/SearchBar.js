import React from 'react'

class SearchBar extends React.Component {

  render() {
    return (
      <div style={setFlex}>
        <input type="text" placeholder="Search Artists" style={styleSearchBar} id='search-bar' spellCheck='false'/>
        <button onClick={this.props.catchSearch} type="submit" style={styleSubmit}>Search</button>
      </div>
    )
  }
}

const setFlex = {
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '5px',
  paddingTop: '5px',
  // background: '#E15554'
}

const styleSearchBar = {
  padding: '5px', 
  borderRadius: '10px',
  outline: 'none'
}

const styleSubmit = {
  marginLeft: '7px',
  borderRadius: '7px',
  paddingLeft: '3px',
  paddingRight: '3px',
  outline: 'none'
}

export default SearchBar