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
import PokeCard from './components/PokeCard';
import Pokemon from './Pokemon';
import PokemonForm from './InputBox';


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{ background : 'lightblue', color :'darkred' }}>Welcom to my PokeAPI!</h1>
        
        <PokemonForm />
        <Pokemon />
      </header>
    </div>
  );
}
*/
class App extends Component {

  constructor() {
    super();
    this.state = {
      pokemons : [],
      pokemonDetails : [],
    }    
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
        this.setState({pokemons : data.results}, () => {
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
        })        
      }
    })
    .catch(console.log)
  }

  render() {
    const {pokemonDetails} = this.state;

    const renderedPokemonList = pokemonDetails.map((pokemon, index) => {
      return (<PokeCard pokemon={pokemon} />);
    });

    return (

      <div className="container">
        <h1 style={{ background : 'lightblue', color :'darkred' }}>Welcom to my PokeAPI!</h1>
        <PokemonForm />
          <div className="card-columns">
            {renderedPokemonList}
          </div>
        </div>
    );
  }
}

export default App;
