import React from 'react'
import Pokemon from './Pokemon';
import PokemonForm from './InputBox';
const Header = () => {
    return (
        <div className="App-topbar">
            <center>
            <h1 style={{ background : 'lightblue', color :'darkred' }}>Welcom to my PokeAPI!</h1>
            <PokemonForm />
            <Pokemon />
            <a href="https://pokeapi.co/">https://pokeapi.co/</a>
                
            </center>
        </div>
    )
};

export default Header

