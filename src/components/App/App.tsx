import React from 'react';
import SimpleDonut from '../SimpleDonut/SimpleDonut';
import PrettyDonut from '../PrettyDonut/PrettyDonut';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
      <div className="App-content">
        <div className="chart-wrapper">
          <SimpleDonut />
        </div>
        <div className="chart-wrapper">
          <PrettyDonut />
        </div>
      </div>
      <footer className="App-footer">
        Footer
      </footer>
    </div>
  );
}

export default App;
