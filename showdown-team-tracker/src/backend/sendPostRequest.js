const axios = require('axios');

const showdownData = `
Charizard @ Choice Specs
Ability: Blaze
EVs: 252 SpA / 4 SpD / 252 Spe
Timid Nature
- Fire Blast
- Air Slash
- Solar Beam
- Focus Blast
`;

axios.post('http://localhost:3001/api/convert-showdown', showdownData, {
    headers: {
        'Content-Type': 'text/plain',
    },
})
    .then(response => {
        console.log('Server response:', response.data);
    })
    .catch(error => {
        console.error('Error sending POST request:', error.message);
    });
