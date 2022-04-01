import React, { useState } from "react";
import { searchPokemon } from "../api";
import { BiSearchAlt } from 'react-icons/bi';

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    const data = await searchPokemon(search.toLowerCase());
    setPokemon(data);
  };

  /*        {pokemon && (
          <div>
            <div>Nombre: {pokemon.name}</div>
            <div>Peso: {pokemon.weight}</div>
            <img src={pokemon.sprites.front_default} />
          </div>
        )}*/

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon..." onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}><BiSearchAlt/></button>
      </div>
    </div>
  );
};

export default Searchbar;
