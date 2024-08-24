import React, {useEffect, useState} from 'react';
import axios from "axios";
import './style.css'




const App = () => {
    const [card,setCard] = useState([])

    useEffect(() => {
        axios('https://pokeapi.co/api/v2/pokemon/')
            .then(async ({ data }) => {
                const promises = data.results.map(async (item) => {
                    const results =await axios(item.url);
                    return {
                        name: item.name,
                        imageUrl: results.data.sprites.front_default
                    };
                });
                const results = await Promise.all(promises);
                setCard(results);
            })
            .catch((err) => console.log(err));
    }, []);


    return (
        <div>
          <h1>Pokemon card</h1>
            <div className="card">
                {card.map(item => (

                    <div key={item.name} className='card__block'>
                        <img src={item.imageUrl} alt=""/>
                        {item.name}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default App;