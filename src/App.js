import './App.css';
import Pokemon from './Pokemon';
//import Welcome from './Welcome';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h>Welcome to my PokeAPI!</h>
        <p>
          i want a type box to go here :)
        </p>
        
        <Pokemon />
      </header>
    </div>
  );
}

export default App;
