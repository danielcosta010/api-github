import './App.css';
import ListaDeRepositorios from './componentes/Api';
import Menu from './componentes/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <ListaDeRepositorios />
    </div>
  );
}

export default App;
