import React from "react";
import Pokemon from "./Pokemon";
import { Container } from "react-bootstrap";
import ModalPokemon from "./ModalPokemon";
import "../styles/Pokedex.css"

const {useState,useEffect} = React;

const Pokedex = (props) => {
    
  const pokemons = props.pokemons;
  const [modalShow, setModalShow] = useState(false);
  
  
  return(
    <div> 
      <Container fluid>
        <div className="d-flex flex-wrap">
            {pokemons.map((pokemon)=>{
              return (
                <Pokemon pokemon={pokemon}/>          
              );
            })}
         </div>
      </Container>
      <ModalPokemon
        show={modalShow}
        onhide={() => setModalShow(false)}
      />
    </div>
  );
}
 export default Pokedex
