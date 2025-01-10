import './App.css';
import CardDisplay from './components/CardDisplay/CardDisplay';
import DeckCreator from './components/DeckCreator/DeckCreator';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">DeckCreator</Link></li>
            <li><Link to="/cards">Cards</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<DeckCreator />} />
          <Route path="/cards" element={<CardDisplay/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;