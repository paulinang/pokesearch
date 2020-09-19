import React from 'react';

import Pokemon from './Pokemon';
import './PokemonList.css';

const PokemonList = (props) => {
  let divStyle, pokemon;
  if (props.pokemon.length === 1) {
    divStyle = 'pokemon-single';
    pokemon = <Pokemon pokemon={props.pokemon[0]} />;
  } else {
    divStyle = 'pokemon-grid';
    pokemon = props.pokemon.map((p) => <Pokemon key={p.id} pokemon={p} />);
  }

  return <div className={divStyle}>{pokemon}</div>;
};

export default PokemonList;
