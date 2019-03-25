import React from 'react' 

class SearchResults extends React.Component {
  render() {
    const {title, artist} = this.props.song;
    return (
      <div>
        <p style={setFlex}>Title: {title}, Artist: {artist}</p>
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

export default SearchResults;