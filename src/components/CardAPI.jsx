import { useState, useEffect } from "react";

function Card(cardName) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?key=dce85a29c931280b785d8ce4f4255dc72602fda2d35bc511b84d91ca2d611233&name=${cardName.cardName}`)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error))
    }, [cardName])

    return (
        <>
            {data ? <img className="card" src={data.data[0].card_images[0].image_url_small} alt={data.data[0].name} id={data.data[0].id}/> : 'Loading...'}
        </>
    )
}

export default Card