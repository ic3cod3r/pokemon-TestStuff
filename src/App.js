/*
import React from 'react';
import './App.css';
import Pokemon from './Pokemon';
import PokemonForm from './InputBox';
import fetchStuff from './fetchStuff';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{ background : 'lightblue', color :'darkred' }}>Welcom to my PokeAPI!</h1>
        <fetchStuff />
        <PokemonForm />
        <Pokemon />
      </header>
    </div>
  );
}

export default App;
*/


import React from 'react';
import {Component} from 'react';
import "./App.css";
import Header from './Header';
import PokeCard from './PokeCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons : [],
      pokemonDetails : [],
      offset: 0,
      loadNumber: 24      
    }
    this.handleMoreClick = this.handleMoreClick.bind(this);
  }

  getNextOffset() {
    return this.state.offset+this.state.loadNumber;
  }

  handleMoreClick(event) {
    const newOffset = this.getNextOffset();
    this.setState({offset: newOffset}, () => {
      console.log("Offset: " + this.state.offset)
      this.getMorePokemon();
    });
    
  }
  
  componentDidMount() {
    this.getMorePokemon();
  }

  getMorePokemon() {
    let url = "https://pokeapi.co/api/v2/pokemon?offset=" + this.state.offset + "&limit=" + this.state.loadNumber;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data) {
        this.setState({pokemons : data.results})

        this.state.pokemons.map(pokemon => {
          fetch(pokemon.url)
          .then(response => response.json())
          .then(data => {
            if (data) {
              var temp = this.state.pokemonDetails
              temp.push(data)
              this.setState({pokemonDetails: temp})
            }            
          })
          .catch(console.log)
        })
      }
    })
    .catch(console.log)
  }

  render() {
    const {pokemonDetails} = this.state;

    const renderedPokemonList = pokemonDetails.map((pokemon, index) => {
      return (<PokeCard pokemon={pokemon} key={pokemon.id}/>);
    });

    return (
      <div>
        <Header />
        <div className="container">
          <div className="card-columns">
            {renderedPokemonList}
          </div>
        </div>
        <button type="button" className="btn btn-secondary btn-block" key="more-button" id="more-button" onClick={this.handleMoreClick}>Load More</button>
      </div>
    );
  }
}

export default App;