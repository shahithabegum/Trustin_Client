import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { RootRoutes } from './config/route';

function App() {
  return (
    <div className="App">
        <Router>
      <RootRoutes />
      </Router>
    </div>
  );
}

export default App;
