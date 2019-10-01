import React from 'react';
import './App.css';
import MainDisplay from './components/MainDisplay'
import { notes } from './constants'

function App() {
  return (
    <div className="App">
      <MainDisplay notes={notes} />
    </div>
  );
}

export default App;
