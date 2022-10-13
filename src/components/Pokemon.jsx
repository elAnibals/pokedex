import React from "react";
import {Badge, Card, Row, Col} from "react-bootstrap"
import "../styles/Pokemon.css";


const Pokemon = (props) =>{
    //console.log(props);
    const pokemon=props.pokemon;
    console.log(pokemon)
    try{
        return (
            <div id="pokemon">
                <p></p>
                <Card key={pokemon.name}style={{ width: '18rem' }} className="row d-flex justify-content-center align-items-center">
                    <Card.Body>
                        <Card.Title><strong>#{pokemon.id} </strong> {pokemon.name}</Card.Title>
                        <img src={pokemon.sprites.front_default} alt="/"/>
                    </Card.Body>
                    <Row fluid>
                        {pokemon.types.map((type)=>{
                            return(
                                <Col>
                                    <Badge>{type.type.name}</Badge>
                                </Col>
                            );
                        })}
                    </Row>   
                    <p></p>
                </Card>
            </div>
        );
    }
    catch(err){
        return(
            <div></div>
        )
    }
    
   
    
}


export default Pokemon;