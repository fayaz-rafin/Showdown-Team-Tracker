// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// SQLite database setup
const db = new sqlite3.Database('pokemon.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        // Create a Pokemon table if it doesn't exist
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
    }
});

// Endpoint to store Pokemon details in the database
app.post('/api/pokemon', (req, res) => {
    const pokemonData = req.body;

    db.run(`
    INSERT INTO pokemon (name, ability, evs, nature, moves)
    VALUES (?, ?, ?, ?, ?)
  `, [pokemonData.pokemon, pokemonData.ability, pokemonData.evs, pokemonData.nature, JSON.stringify(pokemonData.moves)], function (err) {
        if (err) {
            console.error('Error inserting into database:', err.message);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log('Inserted into database with id:', this.lastID);
            res.status(201).json({ id: this.lastID });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
