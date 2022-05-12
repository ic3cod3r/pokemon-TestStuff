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

  async getMorePokemon() {
    const url = "https://pokeapi.co/api/v2/pokemon?offset=" + this.state.offset + "&limit=" + this.state.loadNumber;
    const pokemonDetails = this.state.pokemonDetails
    try {
      const pokemonResponse = await fetch(url);
      const pokemonData = await pokemonResponse.json();
      if (pokemonData) {
        pokemonData.results.forEach(async (pokemon) => {
          const detailsResponse = await fetch(pokemon.url);
          const detailsData = await detailsResponse.json();
          pokemonDetails.push(detailsData);
        });
        this.setState({ pokemons: pokemonData.results, pokemonDetails: pokemonDetails })
      }
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    const {pokemonDetails} = this.state;

    const sortedPokemonDetails = pokemonDetails;
    sortedPokemonDetails.sort((pokemon1, pokemon2) => pokemon1.id - pokemon2.id);

    const renderedPokemonList = sortedPokemonDetails
        .map((pokemon) => {
          // Pass pokemon ID instead of pokemon data
      return (<PokeCard pokemon={pokemon} key={pokemon.id}/>);
    });

    return (
      <div>
        <Header />
        <div className="container">
          <div className="card-deck">
            {renderedPokemonList}
          </div>
        </div>
        <button type="button" className="btn btn-secondary btn-block" key="more-button" id="more-button" onClick={this.handleMoreClick}>Load More</button>
      </div>
    );
  }
}

export default App;