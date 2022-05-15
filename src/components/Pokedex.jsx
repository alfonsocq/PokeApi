import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Pokedex = () => {

    
    const [pokemon, setPokemon] = useState({});
    const [botodex, setBotodex] = useState(false);
//    const [alerta, setAlerta] = useState(false);
    
    
    const Pokeboton = () => {
        setBotodex(!botodex);
    }
    
//    useEffect(() => {
//        setAlerta(true);
//    }, [])
//    const actualizar = () => {
//        setBotodex (true);
//        if (botodex === true)
//            return;
//
//    }
//    const fa = {pokemon.map(p => ( 
//        <div>
//            {p.name}
//        </div>
//        ))};
    useEffect(()=> {
    
      if (botodex===true) {  
        
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
//            .then(response=>{
//            console.log(response);
//    })
            .then(response=> {
                console.log(response.data.results)
                setPokemon(response.data.results)
            })
    } else {
        setPokemon([])
        }
    },  [botodex]);


    return(
        <div>
            <button type="button" className="btn btn-primary" onClick={Pokeboton}>Fetch Pokemon</button>
             
            <div>
                {
                    pokemon.map((p) => { 
                       return (
                            <div key={p}>
                               <p> {p.name} </p>
                           </div>
                        );
                    })
                }
            </div >
                
            
        </div>
    )
}
//const PokeApi = (props) => {
//    const [poke, setPoke] = useState([]);
// 
//    useEffect(() => {
//        fetch("https://pokeapi.co/api/v2/pokemon")
//            .then(response => response.json())
//            .then(response => setPoke(response.results))
//    }, []);
//
//    const handleClick = () => {
//        return (
//            <h1>Hola Mundo</h1>
//        )
//    };
//
//    
// 
//    return (
//        <div>
//            {poke.length > 0 && poke.map((pokemon, espikachu)=>{
//                return (<div key={espikachu}>{pokemon.name}</div>)
//            })}
//        </div>
//    );
//}
export default Pokedex;
