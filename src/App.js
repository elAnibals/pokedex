import React from 'react';
import './App.css';
import NavigationBar from "./components/Navbar"
import Pokedex from "./components/Pokedex";
import { getPokemonData, getPokemons } from './api';

const {useState,useEffect} = React;

function App() {
  const [pokemons, setPokemons]=useState([]);

  const fetchPokemons = async () => {
    try{
      const data= await getPokemons();
      const results = await Promise.all(data.results.map((pokemon)=>{
        return getPokemonData(pokemon.url);
      }));
      setPokemons(results);
    }
    catch(err){
      
    }
  }

  useEffect(()=>{
    fetchPokemons();
  },[]);

  return (
    <div className="App">
      <div className="main-container">
        <NavigationBar/>
        <Pokedex pokemons={pokemons}/>
      </div>
    </div>
  );
}

export default App;
