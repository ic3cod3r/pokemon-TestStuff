import './App.css';
import Pokemon from './Pokemon';
import PokemonForm from './InputBox';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{ background : 'lightblue', color :'darkred' }}>Welcom to my PokeAPI!</h1>
        <fetchStuff />
        <PokemonForm />
        <Pokemon />
      </header>
    </div>
  );
}

export default App;
