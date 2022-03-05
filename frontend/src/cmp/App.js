import '../css/app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Navbar from './Navbar.js';


function App() {
  return (
    
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
