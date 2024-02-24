// PokemonDetails.js
import React, { useState } from 'react';
//import fs from 'fs'; // Assuming you are using Node.js environment

function textToJSON(text) {
    const lines = text.split('\n');
    const pokemonData = {};

    // Extract Pokemon name from the first line
    const firstLineParts = lines[0].split('@');
    pokemonData.pokemon = firstLineParts[0].trim();

    lines.slice(1).forEach(line => {
        const parts = line.split(':');
        const key = parts[0].trim();
        const value = parts[1] ? parts[1].trim() : '';

        if (key === 'Ability') {
            pokemonData.ability = value;
        } else if (key === 'EVs') {
            pokemonData.evs = value;
        } else if (key === 'Nature') {
            pokemonData.nature = value;
        } else if (key.startsWith('-')) {
            pokemonData.moves = pokemonData.moves || [];
            pokemonData.moves.push(key.trim().substring(1));
        } else {
            pokemonData[key.toLowerCase()] = value;
        }
    });

    return JSON.stringify(pokemonData, null, 2);
}

function PokemonDetails({ inputText }) {
    const [pokemonJson, setPokemonJson] = useState('');

    const generateJson = () => {
        const jsonOutput = textToJSON(inputText);
        setPokemonJson(jsonOutput);
        // If you want to save to a file in the client-side, you'll need to handle it differently (e.g., using Blob).
    };

    return (
        <div>
            <h1>Pokemon Details</h1>
            <textarea
                rows="10"
                cols="50"
                value={inputText}
                onChange={(e) => setPokemonJson(e.target.value)}
            />
            <button onClick={generateJson}>Generate JSON</button>
            {pokemonJson && (
                <div>
                    <h2>Generated JSON:</h2>
                    <pre>{pokemonJson}</pre>
                </div>
            )}
        </div>
    );
}

export default PokemonDetails;
