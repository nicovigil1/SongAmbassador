import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SongSearch from './components/SongSearch';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          fav_id: 1,
          title: "Don't Stop Believin'",
          artist: "Journey"
        },
        {
          fav_id: 2,
          title: "I cry evertiem",
          artist: "me"
        }
      ]
    }
  }

  populateSongs = () => {
    fetch('https://intense-escarpment-60510.herokuapp.com/api/v1/favorites')
    .then((res) => {return res.json()})
    .then(favorites => this.setState({songs: favorites}))
    // .then(return => console.log(return))
      // this.setState((res) => {songs: [...this.state.songs, res.json()]})
      // console.log(res.json());
 
  }

  searchArtists(artist) {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_artist=${artist}&apikey=${process.env.REACT_APP_MUSIXMATCH}`)
      .then(res => {console.log(res.json())})
  }

  catchSearch = () => {
    let searchValue = document.querySelector('#search-bar').value
    this.searchArtists(searchValue)
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World - this should be a navbar</h1>
        <SearchBar catchSearch={this.catchSearch}/>
        <SongSearch songs={this.state.songs}/>
        <button onClick={this.populateSongs}>favorites</button>
      </div>
    );
  }
}

export default App;
