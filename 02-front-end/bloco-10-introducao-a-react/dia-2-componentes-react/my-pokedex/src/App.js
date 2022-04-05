import './App.css';
import Header from './Header';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <main className='container'>
      <Header title= 'https://pokedex.sleduardo.dev/img/logo.svg' />
      <div className="App">
      <Pokedex pokemons={pokemons} />
    </div>
      

    </main>
  );
}

export default App;
