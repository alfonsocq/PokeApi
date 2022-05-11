import React, {useEffect, useState} from 'react';
import axios from 'axios';

const PokeApi = props => {

    const [pokemon, setPokemon] = useState(null);
    
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon')
//            .then(response=>{
//            console.log(response);
//    })
            .then(response=> {
                setPokemon(response.data.message)})
            }, []); 
    return(
        <div>
            afas
            {pokemon}
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
export default PokeApi;
