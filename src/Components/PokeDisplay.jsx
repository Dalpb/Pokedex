import "../styles/PokeDisplay.css"
import {useState,useEffect} from 'react'


export function PokeDisplay({data}){
    const render =()=>{
        return (
            <>
                <h1 id="p-name">{data.name}</h1>
                <img id="p-img" src={data.srcImg} alt={`pokemon image -${data.id}`}/>
                <div className="stats-container">
                    <p><strong>Hp:</strong><span id="hp">{data.hp}</span></p>
                    <p><strong>Attack:</strong><span id="attack">{data.attack}</span></p>
                    <p><strong>Defense:</strong><span id="defense">{data.defense}</span></p>
                    <p><strong>Special-Attack:</strong><span id="s-attack">{data.s_attack}</span></p>
                    <p><strong>Special-Defense:</strong><span id="s-deffense">{data.s_defense}</span></p>
                    <p><strong>Speed:</strong><span id="speed">{data.speed}</span></p>
                </div>
            </>
        )
    }

    return(
        <div className="display-container">
            <div className="border-displayer">
                <div className="main-displayer">
                {data.name === undefined ? <></>: render()}
                </div>
            </div>
        </div>
    )
}

export default PokeDisplay;