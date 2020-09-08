import React from 'react';
import './App.scss';
import Picker from './components/circular-picker/picker';

function App() {
  return (
    <div className="App">
      <Picker items={['facebook', 'gmail', 'instagram', 'linkedin', 'tiktok', 'whatsapp', 'twitter', 'youtube']}></Picker>
    </div>
  );
}

export default App;
