import '../css/app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Navbar from './Navbar.js';
import Ballot from './Ballot.js';


const ballotObj = {
  "ballotMeasures": [
      {
          "id": 0,
          "measureText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
          "measureOptions": ["option A", "option B", "option C"], 
          "writein": true
      },
      {
          "id": 1,
          "measureText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
          "measureOptions": ["option A", "option B", "option C", "option D"], 
          "writein": false
      },
      {
          "id": 2,
          "measureText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
          "measureOptions": ["option A", "option B"], 
          "writein": true
      },
      {
          "id": 3,
          "measureText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
          "measureOptions": ["option A", "option B", "option C"], 
          "writein": false
      }
  ]
}

function App() {
  return (
    
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ballot" element={<Ballot measures={ ballotObj.ballotMeasures } state="CO"/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
