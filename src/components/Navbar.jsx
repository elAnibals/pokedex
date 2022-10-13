import React from "react";
import "../styles/Navbar.css";
import {Navbar, Container, Form, Button} from "react-bootstrap";
import pokeball from "../assets/pokeball.png"
import {searchPokemon} from "../api"
import Pokemon from "./Pokemon";

const {useState}=React;


const NavigationBar = () =>{
    const [search,setSearch]= useState("");
    const [pokemon,setPokemon]=useState("");

    const onChange = (evt)=>{
        setSearch(evt.target.value);
    }

    const onClick = async (evt)=>{
        const data= await searchPokemon(search);
        setPokemon(data);
    }

    return(
        <Container fluid>
            <Navbar expand="xxl" variant="light" bg="light">
                <div className="">
                    <img src={pokeball} alt="/" width="50" height="50" />
                </div>
                <div>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Buscar pokémon"
                            className="me-2"
                            aria-label="Search"
                            onChange={onChange}
                        />
                        <Button 
                            variant="outline-danger" 
                            onClick={onClick}
                        >
                            Buscar
                        </Button>
                    </Form>
                </div>
            </Navbar>
            <div><Pokemon pokemon={pokemon}/></div>
        </Container>
    );
}
export default NavigationBar;
