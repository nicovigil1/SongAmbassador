import React from 'react'
import SearchResults from './SearchResults'

class SongSearch extends React.Component {
  render() {
    return(
      <div style={setFlex}>
        {this.props.results.map(result => {
          return <SearchResults key={result.fav_id} result={result.track} />
        })}
      </div>
    )
  }
}

const setFlex = {
  display: 'flex',
  flexDirection: 'column',
}


export default SongSearch;