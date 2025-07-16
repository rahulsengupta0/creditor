import { useState } from 'react';
import './App.css';
import LandingPage from './page/LandingPage'; // Import your LandingPage component

function App() {
  const [count, setCount] = useState(0); // You can remove this if not needed

  return (
    <div className="app">

      <LandingPage />
    </div>
  );
}

export default App;