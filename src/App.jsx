import { useState } from 'react'
import styles from "./styles/App.module.css";
import TopButtons  from './Components/TopButtons';
import BottomButtons from './Components/BottomButtons';
import PokeDisplay from './Components/PokeDisplay';
import PokeSearch from './Components/PokeSearch';


export function App() {
  
  const [pokeData, setPokeData] = useState({});

  const catchPokeData = (changeData)=>{
    setPokeData(changeData);
  }

  return (
    <>
      <div className={`${styles.pokeCase} ${styles.front}`}>
        <TopButtons/>
        <PokeDisplay data={pokeData}/>
        <BottomButtons/>
        <PokeSearch catchPokeData={catchPokeData}/>
      </div>
      <div className={`${styles.pokeCase} ${styles.back}`}></div>
    </>
  )
}

export default App
