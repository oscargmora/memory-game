import { useState } from "react";
import Card from "./CardAPI";


function GameBoard() {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(currentScore);
    const [currentCardsClicked, setCurrentCardsClicked] = useState([]);
    const [currentCards, setCurrentCards] = useState([{cardId: 0, cardName: 'Blue-Eyes White Dragon'}, {cardId: 1, cardName: 'Dark Magician'}, {cardId: 2, cardName: 'Obelisk the Tormentor'}, {cardId: 3, cardName: 'Slifer the Sky Dragon'}, {cardId: 4, cardName: 'The Winged Dragon of Ra'}, {cardId: 5, cardName: 'Kuriboh'}, {cardId: 6, cardName: 'Dark Magician Girl'}, {cardId: 7, cardName: 'Pot of Greed'}, {cardId: 8, cardName: 'Red-Eyes Black Dragon'}, {cardId: 9, cardName: 'Exodia The Forbidden One'}])
    const urlArray = convertStrings(currentCards);

    function convertStrings(array) {
        return array.map((element) => element.cardName.replace(/ /g, '%20'));
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    function on() {
        document.getElementById("overlay").style.display = "block";
    }

    function restartGame() {
        location.reload()
    }

    const handleCardClick = (id) => {
        if (currentCardsClicked.includes(id)) {
            // Update Current Cards Clicked
            setCurrentCardsClicked([]);

            //Update Current Score
            setCurrentScore(0);

            //Shuffle Cards
            setCurrentCards([{cardId: 0, cardName: 'Blue-Eyes White Dragon'}, {cardId: 1, cardName: 'Dark Magician'}, {cardId: 2, cardName: 'Obelisk the Tormentor'}, {cardId: 3, cardName: 'Slifer the Sky Dragon'}, {cardId: 4, cardName: 'The Winged Dragon of Ra'}, {cardId: 5, cardName: 'Kuriboh'}, {cardId: 6, cardName: 'Dark Magician Girl'}, {cardId: 7, cardName: 'Pot of Greed'}, {cardId: 8, cardName: 'Red-Eyes Black Dragon'}, {cardId: 9, cardName: 'Exodia The Forbidden One'}])
        } else {
            // Update Current Cards Clicked
            setCurrentCardsClicked(prevCards => {
                const newCards = [...prevCards];
                newCards.push(id);
                return newCards;
            })

            // Update Current Score
            setCurrentScore(currentScore => {
                return currentScore + 1
            });

            // Update Best Score
            setBestScore(prevBestScore => {
                if (prevBestScore <= currentScore) {
                    return currentScore + 1;
                }
                return prevBestScore;
            });

            //Shuffle Cards
            setCurrentCards(prevArray => {
                const newArray = shuffle(prevArray);
                return newArray;
            })

            if (currentScore === 9) {
                const body = document.querySelector('#root');
                const container = document.createElement('container');
                const overlay = document.createElement('div');
                const winScreen = document.createElement('div');
                const button = document.createElement('button');
                const winText = document.createElement('p');

                overlay.setAttribute('id', 'overlay')
                winScreen.setAttribute('id', 'win-screen')

                body.append(container);
                container.append(overlay);
                container.append(winScreen);

                winText.textContent = 'You Win!'
                button.textContent = 'Play Again?'
                button.addEventListener('click', restartGame);

                winScreen.append(winText);
                winScreen.append(button);
                on();
            }
        }
    }
    
    return (
        <div className="game-board" >
            <div className="header">
                <div className="title">
                    <h1>Yu-Gi-Oh Memory Game</h1>
                    <h2>Don&apos;t Click the Same Card Twice!</h2>
                </div>
                <div className="score-board">
                    <p>Current Score: {currentScore}</p>
                    <p>Best Score: {bestScore}</p>
                </div>
            </div>
            <div className="cards-container">
                {
                    urlArray.map((element, index) => (
                        <div className="card-container" key={index} onClick={(e) => handleCardClick(e.target.id)}>
                            <Card cardName={element}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default GameBoard;