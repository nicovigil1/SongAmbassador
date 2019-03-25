import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SongSearch from './components/SongSearch';


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
    .then(asdf => this.setState({songs: asdf}))
    // .then(return => console.log(return))
      // this.setState((res) => {songs: [...this.state.songs, res.json()]})
      // console.log(res.json());
 
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World - this should be a navbar</h1>
        <SongSearch songs={this.state.songs}/>
        <button onClick={this.populateSongs}>favorites</button>
      </div>
    );
  }
}

export default App;
