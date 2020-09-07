import React from 'react';
import './App.scss';
import Picker from './components/circular-picker/picker';

function App() {
  return (
    <div className="App">
      <Picker elements={['1', '2', '3', '4', '5', '6', '7', '8']}></Picker>
    </div>
  );
}

export default App;
