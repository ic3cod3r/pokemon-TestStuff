import React from 'react';
//import ReactDOM from 'react-dom';

class PokemonForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A pokemon was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pokemon:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
 
  // ReactDOM.render(
  //   <PokemonForm />,
  //   document.getElementById('root')
  // );
  
export default PokemonForm


// https://pokeapi.co/api/v2/type/{id or name}/  <-- this tells what type of pokemon it is... a good place to start with the if statement inside the input box
/*
import React, { Component } from "react";
import axios from "axios";

export default class PokemonList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon?/",
    pokemon: null,
    pokeTemp: null,
    searchValue: "",
  };

  //information about pokemon
  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
    this.setState({ pokeTemp: res.data["results"] });
  }

  //user search for pokemon
  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ searchValue: value });
  };

  filterPokemon = (userSearch) => {
    const allPokemon = [...this.state.pokeTemp];
    this.setState({
      pokemon: allPokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(userSearch.toLowerCase())
      ),
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchValue}
          onChange={this.handleInputChange}
        />
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map((pokemon) => (
              
            ))}
          </div>
        ) : (
          
        )}
      </div>
    );
  }
}
//export default PokemonForm

*/