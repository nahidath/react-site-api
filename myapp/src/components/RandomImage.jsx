import React, {useEffect, useState} from "react";

const RandomImage = () => {
    const [d, setData] = useState([]);
    const fetchData = () => {
        fetch("www.thecocktaildb.com/api/json/v1/1/random.php")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data);

            })
    }
    useEffect(() => {fetchData()}, []);

    return (
        <div>

            <img
                src={d.strDrinkThumb}
                alt="Impossible d'afficher l'image, problème de fetch"
            />
        </div>


    )
}

export default RandomImage;