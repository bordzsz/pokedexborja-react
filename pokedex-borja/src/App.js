import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import "./styles.css";
import React from "react";
import { getPokemons, getPokemonsData } from "./api";
const { useState, useEffect } = React;

export default function App() {
  //const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try{
      const data = await getPokemons();
      setPokemons(data.results);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url);
      })
      const results = await Promise.all(promises);
      setPokemons(results);
    }catch(err){

    }
  }

  useEffect(() =>{
    fetchPokemons();
  }, [])

  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
        <Pokedex pokemons={pokemons}/>
      </div>
    </div>
  );
}
