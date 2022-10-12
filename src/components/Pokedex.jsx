import React from "react";
import pokedexImg from "../assets/pokedex1.png"
import Pokemon from "./Pokemon";
import { Container } from "react-bootstrap";
import "../styles/Pokedex.css"

const Pokedex = (props) => {
    const pokemons = props.pokemons;
    console.log(props);
    return(
        <div> 
            <header><img src={pokedexImg} alt="/"/></header> <Container fluid>
            <div className="pokemons-container">
                {
                    pokemons.map((pokemon)=>{
                        return (
                            <Pokemon pokemon={pokemon}/>          
                        );
                    })
                }
             </div>
            </Container>
        </div>
    );
}
 export default Pokedex