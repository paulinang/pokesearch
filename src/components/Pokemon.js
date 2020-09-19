import React from 'react';

import './Pokemon.css';

const Pokemon = (props) => {
  return (
    <div className="pokemon">
      <div className="pokemon-header">
        <img src={`${process.env.PUBLIC_URL}/pokeball.png`} alt="pokeball" />
        <span className="pokemon-title">
          #{props.pokemon.id} {props.pokemon.name}
        </span>
      </div>
      <div className="pokemon-body">
        <div className="pokemon-sprite">
          <img src={props.pokemon.sprite} alt="sprite" />
        </div>
        <div>
          <ul>
            <li>Type: {props.pokemon.types.join(', ')}</li>
            <li>Height: {props.pokemon.height}</li>
            <li>Weight: {props.pokemon.weight}</li>
            <li>Habitat: {props.pokemon.habitat}</li>
          </ul>
        </div>
      </div>
      <div className="pokemon-flavortext">{props.pokemon.flavorText}</div>
    </div>
  );
};

export default Pokemon;
