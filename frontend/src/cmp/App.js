import '../css/app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Navbar from './Navbar.js';
import Ballot from './Ballot.js';



function App() {
  return (
    
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ballot" element={<Ballot state="CO"/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
