import React from "react";
import {Badge, Card, Row, Col} from "react-bootstrap"
import "../styles/Pokemon.css";


const Pokemon = (props) =>{
    //console.log(props);
    const pokemon=props.pokemon;
    console.log(pokemon)
    return (
        <div id="pokemon">
            <p></p>
            <Card key={pokemon.name}style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title><strong>#{pokemon.id} </strong> {pokemon.name}</Card.Title>
                    <img src={pokemon.sprites.front_shiny} alt="/"/>
                </Card.Body>
                <Card.Footer fluid>
                    <Row fluid>
                        {
                            pokemon.types.map((type)=>{
                                return(
                                    <Col>
                                        <Badge>{type.type.name}</Badge>
                                    </Col>
                                );
                            })
                        }
                    </Row>   
                </Card.Footer>
            </Card>
        </div>
    );
   
    
}


export default Pokemon;