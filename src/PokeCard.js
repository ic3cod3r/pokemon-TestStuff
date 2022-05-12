import React, { useState } from 'react'


const PokeCard = ({pokemon}) => {
    const [isExpanded, thing2] = useState(false);
    
    return (
        <div className="col-sm-4" key={pokemon.id} >
            <div className="card text-center mx-auto" >
                <div className="card-header">
                    <a target="_blank" rel="noopener noreferrer" href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}_(Pokémon)`}>
                        {pokemon.name}
                    </a>
                </div>
                <div className="card-body"> 
                    { isExpanded && (
                        <>    
                            <h6 className="card-subtitle mb-2 text-muted">Id: {pokemon.id}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Height: {pokemon.height}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Weight: {pokemon.weight}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Abilities: {pokemon.ability}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Type: {pokemon.type}</h6>
                        </>
                    )}
                    <img src={pokemon.sprites['front_default']} alt={`Front-facing view of ${pokemon.name}`} />
                    <img src={pokemon.sprites['back_default']} alt={`Back-facing view of ${pokemon.name}`} />
                </div>
            </div>

        </div>
    )
};

export default PokeCard