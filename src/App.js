import axios from 'axios';
import './App.css';
import Currency from './Currency';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <h1>Döviz Hesaplama</h1>
      <Currency />
    </div>
  );
}

export default App;
