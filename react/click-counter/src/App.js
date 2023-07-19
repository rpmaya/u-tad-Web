import './App.css';
import logo from './images/Logo-U-tad.webp'

function App() {
  return (
    <div className="App">
      <div className="utad-logo-container">
        <img  
          className="u-tad-logo"
          src={logo}
          alt="Logo de u-tad" />
      </div>
    </div>
  );
}

export default App;
