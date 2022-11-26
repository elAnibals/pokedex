import React from 'react';
import './App.css';
import NavigationBar from "./components/Navbar"
import Spinner from 'react-bootstrap/Spinner';
import Pokedex from "./components/Pokedex";
import { getPokemonData, getPokemons } from './api';
import Header from "./components/Header"

const {useState,useEffect} = React;
///anibal
function App() {
  const [pokemons, setPokemons]=useState([]);
  const [page, setPage]=useState(0);
  const [total,setTotal]=useState(77);
  const [loading, setLoading]=useState(true);

  const previoustPage = () =>{
    setPage(page-1);
  } 

  const nextPage = () =>{
    setPage(page+1);
  }

  const calculateTotal = () =>{
    
  }


  const fetchPokemons = async () => {
    try{
      setLoading(true)
      const data= await getPokemons(15, 15 * page);
      const results = await Promise.all(data.results.map((pokemon)=>{
        return getPokemonData(pokemon.url);
      }));
      setPokemons(results);
      setLoading(false)
    }
    catch(err){
      
    }
  }

  useEffect(()=>{
    fetchPokemons();
  },[page]);

  return (
    <div className="App">
      <div className="main-container">
        <NavigationBar/>
        <Header 
          page={page}
          totalPages={total}
          onLeftClick={previoustPage}
          onRightClick={nextPage}
        />
        { loading ?
          <div>      <Spinner animation="border" variant="danger" /></div>
          :
          <Pokedex pokemons={pokemons}/>
        }
      </div>
    </div>
  );
}

export default App;
