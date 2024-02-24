// PokemonDetails.js
import React, { useState } from 'react';
import axios from 'axios';

function textToJSON(text) {
    if (!text) {
        console.error('Input text is undefined or null.');
        return '{}'; // Return an empty JSON object as a default
    }

    const lines = text.split('\n');
    const pokemonData = {
        moves: [] // Initialize moves as an empty array
    };

    // Extract Pokemon name from the first line
    const firstLineParts = lines[0].split('@');
    pokemonData.pokemon = firstLineParts[0]?.trim() || 'Unknown Pokemon';

    lines.slice(1).forEach(line => {
        const parts = line.split(':');
        const key = parts[0]?.trim();
        const value = parts[1] ? parts[1].trim() : '';

        if (key === 'Ability') {
            pokemonData.ability = value;
        } else if (key === 'EVs') {
            pokemonData.evs = value;
        } else if (key === 'Nature') {
            pokemonData.nature = value;
        } else if (key && key.startsWith('-')) {
            pokemonData.moves.push(key.trim().substring(1));
        } else if (key) {
            // Handle other properties dynamically
            pokemonData[key.toLowerCase()] = value;
        }
    });

    return JSON.stringify(pokemonData, null, 2);
}

function PokemonDetails() {
    const [inputText, setInputText] = useState('');
    const [pokemonJson, setPokemonJson] = useState('');

    const generateJson = () => {
        const jsonOutput = textToJSON(inputText);
        setPokemonJson(jsonOutput);

        // Send the JSON data to the backend
        axios.post('http://localhost:3001/api/pokemon', JSON.parse(jsonOutput))
            .then(response => {
                console.log('Server response:', response.data);
            })
            .catch(error => {
                console.error('Error sending data to server:', error.message);
            });
    };

    return (
        <div>
            <h1>Pokemon Details</h1>
            <textarea
                rows="10"
                cols="50"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
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
