import React from 'react'
import SearchResults from './SearchResults'

class SongSearch extends React.Component {
  render() {
    return(
      <div style={setFlex}>
        {this.props.songs.map(song => {
          return <SearchResults key={song.fav_id} song={song} />
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