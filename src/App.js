import './App.css';
import ItemListContainer from './components/Contenedores/ItemListContainer';
import NavBar from './components/NavBar';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Loading page..."}/>
    </div>

  );
}

export default App;
