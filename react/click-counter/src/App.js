import Button from './components/button';
import Counter from './components/counter';
import './App.css';
import logo from './images/Logo-U-tad.webp';
import { useState } from 'react';


function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  };

  const counterRestart = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="utad-logo-container">
        <img  
          className="utad-logo"
          src={logo}
          alt="Logo de u-tad" />
      </div>
      <div className='main-container'>
        <Counter numClicks={numClicks} />
        <Button 
          text="Click"
          isClickButton={true}
          handleClick={handleClick} />
        <Button 
          text="Restart"
          isClickButton={false}
          handleClick={counterRestart} />
      </div>
    </div>
  );
}

export default App;
