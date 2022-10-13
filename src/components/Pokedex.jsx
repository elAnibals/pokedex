import React from "react";
import Pokemon from "./Pokemon";
import { Container} from "react-bootstrap";
import "../styles/Pokedex.css"

const Pokedex = (props) => {
    const pokemons = props.pokemons;
    return(
        <div> 
            <Container fluid>
            <div className="pokemons-container">
                {pokemons.map((pokemon)=>{
                    return (
                        <Pokemon pokemon={pokemon}/>          
                    );
                })}
             </div>
            </Container>
        </div>
    );
}
 export default Pokedex