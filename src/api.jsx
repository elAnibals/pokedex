let url = "https://pokeapi.co/api/v2/pokemon/";

export const searchPokemon = async (pokemon) => {
    try{
        const response = await fetch(url+pokemon);
        const data= await response.json();
        return data;
    }
    catch(err){

    }
}

export const getPokemons = async (limit=15, offset=0) => {
    try{
        const response = await fetch(url+"?limit="+limit+"&offset="+offset);
        const data=await response.json();
        return data;
    }
    catch(err){

    }
}

export const getPokemonData = async (newUrl)=>{
    try{
        const response = await fetch(newUrl);
        const data= await response.json();
        return data;
    }
    catch(err){

    }
}