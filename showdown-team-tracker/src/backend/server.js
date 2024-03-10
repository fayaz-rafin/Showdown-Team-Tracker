const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.use(bodyParser.text()); // Middleware to parse request body as plain text

// Function to convert Showdown data to SQLite database
function convertShowdownToSQLite(showdownData) {
    const db = new sqlite3.Database('pokemon.db');

    db.run(`
    CREATE TABLE IF NOT EXISTS pokemon (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      ability TEXT,
      evs TEXT,
      nature TEXT,
      moves TEXT
    )
  `);

    const pokemonEntries = showdownData.split('\n\n');

    pokemonEntries.forEach((pokemonEntry) => {
        const lines = pokemonEntry.split('\n');
        const pokemonData = {
            moves: []
        };

        pokemonData.name = lines[0]?.trim() || 'Unknown Pokemon';

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
            }
        });

        db.run(`
      INSERT INTO pokemon (name, ability, evs, nature, moves)
      VALUES (?, ?, ?, ?, ?)
    `, [pokemonData.name, pokemonData.ability, pokemonData.evs, pokemonData.nature, JSON.stringify(pokemonData.moves)], function (err) {
            if (err) {
                console.error('Error inserting into database:', err.message);
            } else {
                console.log(`Inserted ${pokemonData.name} into the database with id: ${this.lastID}`);
            }
        });
    });

    db.close();
}

// API endpoint to handle Showdown data conversion
app.post('/api/convert-showdown', (req, res) => {
    const showdownData = req.body;

    if (!showdownData) {
        return res.status(400).json({ error: 'Showdown data is missing in the request body.' });
    }

    // Call the function to convert Showdown data to SQLite database
    convertShowdownToSQLite(showdownData);

    res.status(200).json({ message: 'Showdown data converted and stored in the SQLite database.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
