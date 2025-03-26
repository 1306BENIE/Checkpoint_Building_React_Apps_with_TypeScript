import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Bienvenue dans mon application TypeScript</h1>
      <Greeting name="Elysée" />
      <Counter />
    </div>
  );
};

export default App;