import logo from './logo.svg';
import './App.css';
import Contenido from './components/Contenido';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Juego de Preguntas & Respuestas
        </p>

      </header>
      <Contenido className="App-contenido"></Contenido>

    </div>
  );
}

export default App;
