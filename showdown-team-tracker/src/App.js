import './App.css';
import { Input } from '@chakra-ui/react'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://pokemondb.net/pokedex/rhydon"><img className="rhydon" src="https://img.pokemondb.net/sprites/black-white/normal/rhydon-f.png" alt="Rhydon"></img></a>
        <h1>Hello, Showdown Team Tracker!</h1>
        <div className="body">
          <Input variant='flushed' placeholder='Paste your team here' />
        </div>
      </header>
      <body>
        

      </body>
    </div>
  );
}

export default App;
