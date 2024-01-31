import logo from './logo.svg';
import './App.css';
import Crud from './crud';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Crud/>
    </div>
  );
}

export default App;
