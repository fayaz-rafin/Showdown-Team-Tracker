import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    document.title = 'Showdown Team Tracker';
  }, []);
  return (

    <div class="App">
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
