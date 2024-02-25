import Card from "./CardAPI";

const cardNames = ['Blue-Eyes White Dragon', /*'Dark Magician', 'Obelisk the Tormentor', 'Slifer the Sky Dragon', 'The Winged Dragon of Ra', 'Kuriboh', 'Dark Magician Girl', 'Pot of Greed', 'Red-Eyes Black Dragon', 'Exodia The Forbidden One'*/];

function convertStrings(array) {
    return array.map((element) => element.replace(/ /g, '%20'));
}

function Cards() {
    const urlArray = convertStrings(cardNames);
    
    return (
        <div>
            {
                urlArray.map((element, index) => (
                    <Card key={index} cardName={element} />
                ))
            }
        </div>
    );
}

export default Cards;