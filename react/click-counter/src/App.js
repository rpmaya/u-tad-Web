import Button from './components/button';
import Counter from './components/counter';
import './App.css';
import logo from './images/Logo-U-tad.webp'

function App() {

  const handleClick = () => {
    console.log("Click");
  }

  const counterRestart = () => {
    console.log("Restart")
  }

  return (
    <div className="App">
      <div className="utad-logo-container">
        <img  
          className="utad-logo"
          src={logo}
          alt="Logo de u-tad" />
      </div>
      <div className='main-container'>
        <Button 
          text="Click"
          isClickButton={true}
          handleClick={handleClick}/>
        <Button 
          text="Restart"
          isClickButton={false}
          handleClick={counterRestart}/>

      </div>
    </div>
  );
}

export default App;
