import logo from './logo.svg';
import './App.css';
import Dashboard from './views/Dashboard';
import Detail from './views/Detail';
import PostAd from './views/PostAd';
import { useState } from "react";

function App() {
  const [screen, setScreen] = useState()

  function updateScreen(screen) {
    setScreen(screen)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex' }}>
          <button onClick={() => updateScreen('Dashboard')}>Dashboard</button>
          <button onClick={() => updateScreen('Detail')}>Detail</button>
          <button onClick={() => updateScreen('PostAd')}>PostAd</button>
        </div>

        {screen === 'Dashboard' && <Dashboard />}
        {screen === 'Detail' && <Detail />}
        {screen === 'PostAd' && <PostAd />}

      </header>
    </div>
  );
}

export default App;
