import "../styles/PokeSearch.css"
import {getPokemon} from "../js/pokeFetch" 
import {useRef}from 'react'
export function PokeSearch({catchPokeData}) {
    const inputRef = useRef(null)
    return(
        <div className="search-container">
            <input name="pokemon-search" type="text" placeholder="Busca tu pokemon" id="nameOrID"
            ref={inputRef}/>
            <button type="button" onClick={()=>{
                const idOrNamePokemon = inputRef.current.value.toLowerCase();
            
                const data =getPokemon(idOrNamePokemon)
                data.then((pokeInf) =>{
                    const changeData ={
                        id: pokeInf.id,
                        name: pokeInf.name,
                        srcImg: pokeInf.sprites.front_default,
                        srcImgBack: pokeInf.sprites.back_default,
                        hp: pokeInf.stats[0].base_stat,
                        attack: pokeInf.stats[1].base_stat,
                        defense: pokeInf.stats[2].base_stat,
                        s_attack:pokeInf.stats[3].base_stat,
                        s_defense:pokeInf.stats[4].base_stat,
                        speed: pokeInf.stats[5].base_stat,
                    }
                    catchPokeData(changeData);
                })
                inputRef.current.value = ""
            }}></button>
        </div>
    )
} 
export default PokeSearch;