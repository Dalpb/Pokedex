import { useState } from 'react'
import styles from "./App.module.css";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={`${styles.pokeCase} ${styles.front}`}>
        <Buttons />
        <PokeDisplay/>
        <Buttons/>
        <PokeSearch/>
      </div>
      <div className={`${styles.pokeCase} ${styles.back}`}>

      </div>
    </>
  )
}

export default App
