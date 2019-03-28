import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SongSearch from './components/SongSearch';
import SearchBar from './components/SearchBar';
import FavoriteResults from './components/FavoriteResults';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
      results: [],
      displayFavorites: false
    }
  }

  populateFavorites = () => {
    fetch('https://intense-escarpment-60510.herokuapp.com/api/v1/favorites')
    .then((res) => {return res.json()})
      .then(returnFavorites => this.setState({favorites: returnFavorites}))
      .then(() => {
        // maybe just call populate favorites here instead 
        this.setState({ displayFavorites: !this.state.displayFavorites }); 
      })
    // .then(return => console.log(return))
      // this.setState((res) => {songs: [...this.state.songs, res.json()]})
      // console.log(res.json());
  }

  searchArtists(artist) {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_artist=${artist}&apikey=${process.env.REACT_APP_MUSIXMATCH}`)
      .then(res => {return res.json()})
      .then(res_data => {
        // console.log(res_data.message.body.track_list[0])
        this.setState({results: res_data.message.body.track_list})
      })
  }

  catchSearch = () => {
    let searchValue = document.querySelector('#search-bar').value
    this.searchArtists(searchValue)
  }
  
  toggleFavorites = () => {
    // this.setState({ displayFavorites: !this.state.displayFavorites })
  }

  // addToFavorites = () => {
  //   console.log(document.querySelector("#"))
  // }


  render() {
    return (
      <div className="App">
        <section style={styleHeader}>
          <h1>Welcome to Song Ambassador</h1>
        </section>
        <SearchBar catchSearch={this.catchSearch}/>
        <div onClick={this.populateFavorites} style={styleFavoritesToggle}>Favorites </div>
        {this.state.displayFavorites && <FavoriteResults favorites={this.state.favorites}/>}
        <SongSearch results={this.state.results}/>
      </div>
    );
  }
}

const styleHeader = {
  display: 'flex',
  justifyContent: 'center',
  // background: '#E1BC29',
  // color: '#f5f5f5'
}

const styleFavoritesToggle = {
  display: 'flex',
  justifyContent: 'center',
  background: '#e8ab42',
}

// const styleChevron = {
//   content: "&rsaquo;",
//   ariaHidden: "true"
// }
export default App;
