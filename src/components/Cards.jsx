import Card from "./CardAPI";
import ScoreBoard from "./ScoreBoard";

const cardNames = ['Blue-Eyes White Dragon', 'Dark Magician', 'Obelisk the Tormentor', 'Slifer the Sky Dragon', 'The Winged Dragon of Ra', 'Kuriboh', 'Dark Magician Girl', 'Pot of Greed', 'Red-Eyes Black Dragon', 'Exodia The Forbidden One'];

function convertStrings(array) {
    return array.map((element) => element.replace(/ /g, '%20'));
}

function Cards() {
    const urlArray = convertStrings(cardNames);
    
    return (
        <div className="cards-container" >
            <ScoreBoard />
            {
                urlArray.map((element, index) => (
                    <div key={index} onClick={(e) => console.log(e.target.id)}>
                        <Card cardName={element}/>
                    </div>
                ))
            }
        </div>
    );
}

export default Cards;