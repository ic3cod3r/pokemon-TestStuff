import React from 'react';
import {Component} from 'react';
import "./App.css";
import Header from './Header';
import PokeCard from './PokeCard';

// import { LineChart, Line } from 'recharts';
// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

// const renderLineChart = (
//   <LineChart width={400} height={400} data={data}>
//     <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//   </LineChart>
// );

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons : [],
      
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
   
    try {
      const pokemonResponse = await fetch(url);
      const pokemonData = await pokemonResponse.json();
      if (pokemonData) {

        this.setState({ pokemons: pokemonData.results })
      }
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    const {pokemons} = this.state;

    // const sortedPokemonDetails = pokemonDetails;
    // sortedPokemonDetails.sort((pokemon1, pokemon2) => pokemon1.id - pokemon2.id);

    const renderedPokemonList = pokemons
         .map((pokemon) => {
           // am i supposed to do something here? pass pokemonId?
       return (<PokeCard pokemonUrl={pokemon.url} key={pokemon.id}/>);
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