
const fs = require('fs');

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

const inputText = fs.readFileSync('/Users/hasanimam/Desktop/react apps/Showdown-Team-Tracker/showdown-team-tracker/src/components/team.txt', 'utf8');

const jsonOutput = textToJSON(inputText);

fs.writeFileSync('pokemonData.json', jsonOutput);
console.log('JSON data written to pokemonData.json');
