import { useState } from "react";
import Card from "./CardAPI";

const cardNames = ['Blue-Eyes White Dragon', 'Dark Magician', 'Obelisk the Tormentor', 'Slifer the Sky Dragon', 'The Winged Dragon of Ra', 'Kuriboh', 'Dark Magician Girl', 'Pot of Greed', 'Red-Eyes Black Dragon', 'Exodia The Forbidden One'];

function convertStrings(array) {
    return array.map((element) => element.replace(/ /g, '%20'));
}

function GameBoard() {
    const [currentScore, setCurrentScore] = useState(0)
    const [currentCardsClicked, setCurrentCardsClicked] = useState([])
    const urlArray = convertStrings(cardNames);

    const pushToClicked = (id) => {
        if (currentCardsClicked.includes(id)) {
            setCurrentCardsClicked([])
            setCurrentScore(0)
        } else {
            setCurrentCardsClicked(prevCards => {
                const newCards = [...prevCards];
                newCards.push(id);
                return newCards;
            })
            setCurrentScore(currentScore => currentScore + 1)
        }
    }
    
    return (
        <div className="game-board" >
            <div className="score-board">
                <p>Current Count: {currentScore}</p>
            </div>
            <div className="card-container">
                {
                    urlArray.map((element, index) => (
                        <div key={index} onClick={(e) => pushToClicked(e.target.id)}>
                            <Card cardName={element}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default GameBoard;