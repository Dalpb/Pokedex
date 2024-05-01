export const getPokemon = async (name_or_id) =>{

    try{
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${name_or_id}`)
        const data = await response.json();
        return data
    }
    catch(err){
        console.log(`Pokemon not found: ${err}`)
    }

}