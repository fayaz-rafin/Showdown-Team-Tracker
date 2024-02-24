const fs = require('fs');

function textToJSON(text) {
    const lines = text.split('\n');
    const pokemonData = {};

    lines.forEach(line => {
        const parts = line.split(':');
        const key = parts[0].trim();
        const value = parts[1] ? parts[1].trim() : '';

        if (key === 'Talonflame') {
            pokemonData.pokemon = value;
        } else if (key === 'Ability') {
            pokemonData.ability = value;
        } else if (key === 'EVs') {
            pokemonData.evs = value;
        } else if (key === 'Nature') {
            pokemonData.nature = value;
        } else if (key === '- Brave Bird') {
            pokemonData.moves = pokemonData.moves || [];
            pokemonData.moves.push('Brave Bird');
        } else if (key === '- Flare Blitz') {
            pokemonData.moves = pokemonData.moves || [];
            pokemonData.moves.push('Flare Blitz');
        } else if (key === '- Swords Dance') {
            pokemonData.moves = pokemonData.moves || [];
            pokemonData.moves.push('Swords Dance');
        } else if (key === '- Roost') {
            pokemonData.moves = pokemonData.moves || [];
            pokemonData.moves.push('Roost');
        }
    });

    return JSON.stringify(pokemonData, null, 2);
}

const inputText = fs.readFileSync('/Users/hasanimam/Desktop/react apps/Showdown-Team-Tracker/showdown-team-tracker/src/components/team.txt', 'utf8');

const jsonOutput = textToJSON(inputText);

fs.writeFileSync('pokemonData.json', jsonOutput);
console.log('JSON data written to pokemonData.json');
