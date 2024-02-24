import React from "react";
import "./Home.css";
import { Input } from '@chakra-ui/react'
import PokemonDetails from "../components/PokemonDetails";



const Home = () => {
    return (
        <div className="Homepage">
            <a href="https://pokemondb.net/pokedex/rhydon">
                <img className="rhydon" src="https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_112_m.gif" alt="Rhydon"></img>
            </a>
            <h1 >Welcome to Showdown Team Tracker!</h1>
            <div className="body">
                <Input variant='flushed' placeholder='Paste your team here' />
                <button class="button">View Team</button>
                <PokemonDetails />  
            </div>        
        </div>
    );
};
export default Home;