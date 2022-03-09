import React, {useEffect, useState} from "react";

const RandomImage = () => {
    const [d, setData] = useState([]);
    const fetchData = () => {
        fetch("www.thecocktaildb.com/api/json/v1/1/random.php")
            .then(response => {
                console.log('Response:', response);
                return response.json()
            })
            .then(data => {
                console.log(data)
                setData(data)

            })
    }
    useEffect(() => {fetchData()}, []);


    return (
        <div>
            {d &&
            d.map(d => (
                <img
                    src={d.strDrinkThumb}
                    alt="toto"
                />
            ))}
        </div>


    )
}

export default RandomImage;