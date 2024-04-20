import { useState } from 'react'
import styles from "./App.module.css";
import Buttons from './Components/Buttons';
import PokeDisplay from './Components/PokeDisplay';
import PokeSearch from './Components/PokeSearch';


export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={`${styles.pokeCase} ${styles.front}`}>
        <Buttons count={4}/>
        <PokeDisplay/>
        <Buttons count={3}/>
        <PokeSearch/>
      </div>
      <div className={`${styles.pokeCase} ${styles.back}`}>

      </div>
    </>
  )
}

export default App
