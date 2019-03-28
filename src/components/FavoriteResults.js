import React from 'react'




class FavoriteResults extends React.Component {
  render () {
    return (
      this.props.favorites.map(favorite => {
          return <div style={styleFavorites}>
                  <p>Song: {favorite.title}</p>
                  <p>Artist: {favorite.artist}</p>
                </div>
      })
    )
  }

}

const styleFavorites = {
  display: 'flex',
  flexDirection: 'column',
  background: '#e8d542',
  borderTop: '1px solid black',
  borderBottom: '1px solid black',
  borderRadius: '4px',
  paddingLeft: '5px'

}
export default FavoriteResults;