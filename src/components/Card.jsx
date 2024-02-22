import { useState, useEffect } from "react";

function Card() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?key=dce85a29c931280b785d8ce4f4255dc72602fda2d35bc511b84d91ca2d611233&name=Blue-Eyes%20White%20Dragon')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error))
    }, [])

    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    )
}

export default Card