import './App.css';
import Pokemon from './Pokemon';
//import Welcome from './Welcome';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Welcome to my PokeAPI!
        </p>
        
        <Pokemon />
      </header>
    </div>
  );
}

export default App;
