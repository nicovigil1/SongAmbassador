import React from 'react' 

class SearchResults extends React.Component {
  constructor() {
    super() 
    this.state = {
      favorited: false,
    } 
  }
  addToFavorites = () => {
    this.setState({favorited: !this.state.favorited})
    let track = this.props.result
    fetch(`https://intense-escarpment-60510.herokuapp.com/api/v1/favorites/${track.artist_name}/${track.track_name}/${track.track_rating}/${track.track_id}`, {method: "POST"})
  }

  removeFavorites = () => {
    this.setState({ favorited: !this.state.favorited })
    let track = this.props.result
    fetch(`https://intense-escarpment-60510.herokuapp.com/api/v1/favorites/${track.track_id}`, { method: "DELETE" })
  }
  
  render() {
    const { track_name, artist_name } = this.props.result;
    const style = this.state.favorited ? favorites : setFlex
    return (
      <div onClick={this.addToFavorites} style={style}>
        <p>Title: {track_name}</p>
        <p>Artist: {artist_name}
        </p>
        <button onClick={this.removeFavorites}>delete favorite</button>
      </div>
    )
  }
}

const setFlex = {
  background: '#cacaca',
  verticalAlign: 'middle',
  borderTop: '1px solid black',
  borderBottom: '1px solid black',
  borderRadius: '4px',
  paddingLeft: '5px'
}

const favorites = {
  background: '#e8d542',
  verticalAlign: 'middle',
  borderTop: '1px solid black',
  borderBottom: '1px solid black',
  borderRadius: '4px',
  paddingLeft: '5px'
}


export default SearchResults;