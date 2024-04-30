import "../styles/PokeSearch.css"
import {useRef}from 'react'
export function PokeSearch() {
    const inputRef = useRef(null)
    
    return(
        <form className="search-container">
            <input name="pokemon-search" type="text" placeholder="Busca tu pokemon" id="nameOrID"
            ref={inputRef}/>
            <button></button>
        </form>
    )
} 
export default PokeSearch;