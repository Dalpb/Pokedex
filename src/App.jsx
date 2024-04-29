import { useState } from 'react'
import styles from "./styles/App.module.css";
import TopButtons  from './Components/TopButtons';
import BottomButtons from './Components/BottomButtons';
import PokeDisplay from './Components/PokeDisplay';
import PokeSearch from './Components/PokeSearch';


export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={`${styles.pokeCase} ${styles.front}`}>
        <TopButtons/>
        <PokeDisplay/>
        <BottomButtons/>
        <PokeSearch/>
      </div>
      <div className={`${styles.pokeCase} ${styles.back}`}></div>
    </>
  )
}

export default App
