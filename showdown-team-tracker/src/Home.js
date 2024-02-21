import React from "react";
import { Input } from '@chakra-ui/react'

const Home = () => {
    return (
        <div>
            <a href="https://pokemondb.net/pokedex/rhydon"><img className="rhydon" src="https://img.pokemondb.net/sprites/black-white/normal/rhydon-f.png" alt="Rhydon"></img></a>
            <h1>Welcome to Showdown Team Tracker!</h1>
            <div className="body">
                <Input variant='flushed' placeholder='Paste your team here' />
                <button class="button">Button</button>
            </div>        
        </div>
    );
    };
    export default Home;