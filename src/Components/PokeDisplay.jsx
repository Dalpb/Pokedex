import "../styles/PokeDisplay.css"

export function PokeDisplay(){

    return(
        <div className="display-container">
            <div className="border-displayer">
                <div className="main-displayer">
                    <h1>Titulo</h1>
                    <img />
                    <div className="stats-container">
                        <p><strong>Hp:</strong></p>
                        <p><strong>Attack:</strong></p>
                        <p><strong>Defense:</strong></p>
                        <p><strong>Special-Attack:</strong></p>
                        <p><strong>Special-Defense:</strong></p>
                        <p><strong>Speed:</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokeDisplay;