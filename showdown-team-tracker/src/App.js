import './App.css';
import { Input } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </Router>
      </header>
      <body>
        

      </body>
    </div>
  );
}

export default App;
