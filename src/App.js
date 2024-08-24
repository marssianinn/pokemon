import React, {useEffect, useState} from 'react';
import axios from "axios";
import './style.css'




const App = () => {
    const [card,setCard] = useState([])

  useEffect(() => {
    axios('https://pokeapi.co/api/v2/pokemon/')
        .then(({data})=>setCard(data.results))
        .catch((err)=>console.log(err))
  }, []);


    return (
        <div>
          <h1>Pokemon card</h1>
            <div className="card">
                {card.map(item => (

                    <div key={item.name} className='card__block'>
                        <div className='pokemon'/>
                        {item.name}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default App;